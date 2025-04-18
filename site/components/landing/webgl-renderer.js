import fsSource from "site/components/landing/rorschach.frag?raw";
import vsSource from "site/components/landing/rorschach.vert?raw";

export function initializeRorschach(canvas) {
  if (!canvas) {
    console.error("Canvas element not found!");
    return;
  }

  // 1. Get WebGL context (with fallback)
  let gl = canvas.getContext("webgl2");
  if (!gl) {
    console.log("WebGL2 context unavailable. Falling back to WebGL1.");
    gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) {
      console.error("WebGL context initialization failed.");
      alert("Unable to initialize WebGL. Your browser may not support it.");
      return;
    } else {
      console.log("Using WebGL1 context.");
      // Note: WebGL1 support is basic here. The fragment shader might need adjustments
      // (like removing '#version 300 es', 'in/out', and ensuring compatibility).
      // For this refactor, we focus on WebGL2, assuming the provided shader is compatible.
      // Proper WebGL1 fallback requires handling shader differences more robustly.
    }
  } else {
    console.log("Using WebGL2 context.");
  }

  // 2. Compile shaders and link program
  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vsSource);
  const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fsSource);

  if (!vertexShader || !fragmentShader) return; // Exit if shaders failed

  const program = createProgram(gl, vertexShader, fragmentShader);
  if (!program) return; // Exit if program linking failed

  // 3. Get attribute and uniform locations
  const programInfo = {
    program: program,
    attribLocations: {
      vertexPosition: gl.getAttribLocation(program, "aVertexPosition"),
    },
    uniformLocations: {
      resolution: gl.getUniformLocation(program, "uResolution"),
      time: gl.getUniformLocation(program, "uTime"),
      patternIndex: gl.getUniformLocation(program, "uPatternIndex"),
      color: gl.getUniformLocation(program, "uColor"),
      blend: gl.getUniformLocation(program, "uBlend"),
      lastPatternIndex: gl.getUniformLocation(program, "uLastPatternIndex"),
    },
  };

  // 4. Create buffers
  const positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  const positions = [-1.0, -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, 1.0];
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

  // 5. Animation state
  let currentPatternIndex = 0;
  let lastPatternChangeTime = 0;
  const patternChangeInterval = 5000; // ms
  const totalPatterns = 5;
  const transitionDuration = 0.5; // seconds
  let lastPattern = 0;
  let animationFrameId = null;

  // 6. Resize handling
  function resizeCanvas() {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    if (gl) {
      gl.viewport(0, 0, canvas.width, canvas.height);
    }
  }
  resizeCanvas(); // Initial size
  window.addEventListener("resize", resizeCanvas);

  // 7. Utility: Get primary color from CSS variable
  const getPrimaryColor = () => {
    const computedStyle = getComputedStyle(document.documentElement);
    // Default to black if variable is not found
    const primaryColor =
      computedStyle.getPropertyValue("--color-primary")?.trim() || "#000000";
    let r = 0,
      g = 0,
      b = 0;

    if (primaryColor.startsWith("#")) {
      const hex = primaryColor.substring(1);
      if (hex.length === 3) {
        // Handle shorthand hex
        r = parseInt(hex[0] + hex[0], 16) / 255;
        g = parseInt(hex[1] + hex[1], 16) / 255;
        b = parseInt(hex[2] + hex[2], 16) / 255;
      } else if (hex.length === 6) {
        r = parseInt(hex.substring(0, 2), 16) / 255;
        g = parseInt(hex.substring(2, 4), 16) / 255;
        b = parseInt(hex.substring(4, 6), 16) / 255;
      }
    } else if (primaryColor.startsWith("rgb")) {
      const rgbMatch = primaryColor.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
      if (rgbMatch) {
        r = parseInt(rgbMatch[1]) / 255;
        g = parseInt(rgbMatch[2]) / 255;
        b = parseInt(rgbMatch[3]) / 255;
      }
    }
    // No color boost applied here, keep original logic if needed
    // r = Math.min(r * 1.2, 1.0);
    // g = Math.min(g * 1.2, 1.0);
    // b = Math.min(b * 1.2, 1.0);
    return [r, g, b];
  };

  // 8. Render loop
  function render(time) {
    time *= 0.001; // convert ms to seconds

    const shouldSwitch =
      time - lastPatternChangeTime > patternChangeInterval / 1000;
    if (shouldSwitch) {
      lastPattern = currentPatternIndex;
      currentPatternIndex = (currentPatternIndex + 1) % totalPatterns;
      lastPatternChangeTime = time;
    }

    const elapsed = time - lastPatternChangeTime;
    const blend = Math.min(elapsed / transitionDuration, 1.0);

    gl.clearColor(0.0, 0.0, 0.0, 0.0); // Transparent background
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA); // Standard alpha blending

    gl.useProgram(programInfo.program);

    // Setup attributes
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.vertexAttribPointer(
      programInfo.attribLocations.vertexPosition,
      2, // numComponents
      gl.FLOAT, // type
      false, // normalize
      0, // stride
      0, // offset
    );
    gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);

    // Set uniforms
    gl.uniform2f(
      programInfo.uniformLocations.resolution,
      canvas.width,
      canvas.height,
    );
    gl.uniform1f(programInfo.uniformLocations.time, time);
    gl.uniform1i(
      programInfo.uniformLocations.patternIndex,
      currentPatternIndex,
    );
    gl.uniform3fv(programInfo.uniformLocations.color, getPrimaryColor());
    gl.uniform1i(programInfo.uniformLocations.lastPatternIndex, lastPattern);
    gl.uniform1f(programInfo.uniformLocations.blend, blend);

    // Draw
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4); // Draw the quad

    animationFrameId = requestAnimationFrame(render);
  }

  // 9. Start animation
  animationFrameId = requestAnimationFrame(render);

  // Return a cleanup function
  return () => {
    console.log("Cleaning up Rorschach animation");
    window.removeEventListener("resize", resizeCanvas);
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
    if (gl) {
      // Clean up WebGL resources
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      gl.deleteBuffer(positionBuffer);
      // Lose the context if possible (helps resource release)
      const loseContextExt = gl.getExtension("WEBGL_lose_context");
      if (loseContextExt) {
        loseContextExt.loseContext();
      }
    }
  };
}

// --- Helper Functions ---

function createShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const shaderType = type === gl.VERTEX_SHADER ? "Vertex" : "Fragment";
    console.error(
      `Error compiling ${shaderType} shader:`,
      gl.getShaderInfoLog(shader),
    );
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

function createProgram(gl, vertexShader, fragmentShader) {
  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error(
      "Error linking shader program:",
      gl.getProgramInfoLog(program),
    );
    gl.deleteProgram(program);
    // Don't delete shaders here; they might be attached to other programs
    // or caller might want to handle them.
    // Let the main cleanup handle shader deletion.
    return null;
  }
  return program;
}

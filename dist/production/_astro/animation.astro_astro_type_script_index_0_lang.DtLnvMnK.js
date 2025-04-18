const I=`#version 300 es
precision highp float;

uniform vec2 uResolution;
uniform float uTime;
uniform int uPatternIndex;
uniform vec3 uColor;
uniform float uBlend;
uniform int uLastPatternIndex;

out vec4 fragColor;

// --- Utility functions (Noise, FBM, Rotate) ---
float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}
float noise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = random(i + vec2(0.0, 0.0));
  float b = random(i + vec2(1.0, 0.0));
  float c = random(i + vec2(0.0, 1.0));
  float d = random(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}
float fbm(vec2 st, int octaves) {
  float value = 0.0;
  float amplitude = 0.5;
  float frequency = 1.0;
  for (int i = 0; i < 10; i++) {
    if (i >= octaves) break;
    value += amplitude * noise(st * frequency);
    frequency *= 2.0;
    amplitude *= 0.5;
  }
  return value;
}
vec2 rotate(vec2 v, float a) {
  float s = sin(a);
  float c = cos(a);
  mat2 m = mat2(c, -s, s, c);
  return m * v;
}
// --- End Utility functions ---


// --- Rorschach Pattern Generation ---
float rorschach(vec2 st, int patternType, float time) {
  vec2 symmetricSt = vec2(abs(st.x), st.y);
  float pattern = 0.0;
  float t = time * 0.1; // Slower time effect

  // Pattern 0: Bat/Butterfly (Reference Image 1)
  if (patternType == 0) {
    vec2 p = symmetricSt * vec2(1.8, 2.2); // Slightly wider, less tall
    p.y -= 0.2; // Move slightly up
    float wings = fbm(p * (1.1 + st.y * 0.15 + sin(t*1.2)*0.05) + vec2(t * 0.06, t * 0.03), 6); // More octaves for detail
    vec2 bodyCoords = symmetricSt * vec2(0.5, 3.8) * (1.0 + sin(t*0.9)*0.03); // Narrower body
    bodyCoords.y -= 0.1 * sin(t * 0.7);
    float body = fbm(bodyCoords + vec2(0.0, t * 0.12), 7); // More detail in body
    pattern = mix(wings, body, smoothstep(0.03, 0.2, abs(st.x))); // Sharper body mix
    pattern = smoothstep(0.35, 0.65, pattern); // Adjust threshold for density
    pattern += smoothstep(0.1, 0.0, abs(st.x)) * 0.15; // Slightly enhance center line
  }
  // Pattern 1: Horizontal/Mask (Reference Image 2)
  else if (patternType == 1) {
    vec2 p = symmetricSt * vec2(2.0 + cos(t*0.5)*0.1, 1.6) - vec2(0.0, 0.4); // More horizontal stretch
    p = rotate(p, sin(t * 0.35) * 0.06);
    float base = fbm(p + t * 0.04, 5); // Slightly less detail for fuzzier look
    vec2 sideCoords = symmetricSt * vec2(3.0, (1.0 + cos(st.x * 1.5)*0.15));
    sideCoords += vec2(0.0, -0.7 + t*0.06);
    float sides = fbm(sideCoords, 5);
    pattern = mix(base, sides, smoothstep(0.4, 0.6, abs(st.x) + st.y * 0.05)); // Mix later for broader shape
    pattern = smoothstep(0.45, 0.7, pattern); // Adjust threshold
    pattern *= smoothstep(-0.8, -0.2, st.y); // Adjust vertical bounds
  }
  // Pattern 2: Skull (Reference Image 3)
  else if (patternType == 2) {
    vec2 p = symmetricSt * vec2(1.5, 1.5) * (1.0 + sin(t*0.25)*0.03) - vec2(0.0, 0.1); // Base shape scale
    float mainShape = fbm(p + t * 0.05, 7); // Detailed base

    // Eyes (Subtracting noise)
    vec2 eyeCoords = symmetricSt * vec2(4.0, 3.5);
    eyeCoords.y -= 0.4;
    float eyes = fbm(eyeCoords + vec2(0.0, t * 0.02), 5);
    mainShape -= smoothstep(0.4, 0.6, eyes) * 0.8 * smoothstep(0.05, 0.3, abs(st.x)); // Carve out eyes

    // Nose cavity (Subtracting)
     vec2 noseCoords = symmetricSt * vec2(2.0, 6.0);
     noseCoords.y += 0.2;
     float nose = fbm(noseCoords + vec2(t * 0.01, 0.0), 4);
     mainShape -= smoothstep(0.5, 0.7, nose) * 0.6 * smoothstep(0.0, 0.1, abs(st.x)); // Carve out nose

    // Jaw/Mouth area (Adding noise)
    vec2 jawCoords = symmetricSt * vec2(1.8, 2.5);
    jawCoords.y += 0.6 + sin(t*0.8)*0.1;
    float jaw = fbm(jawCoords + t*0.03, 6);
    pattern = mix(mainShape, jaw, smoothstep(0.3, 0.7, st.y + 0.5)); // Mix in jaw lower down

    pattern = smoothstep(0.4, 0.75, pattern); // Adjust final threshold
    pattern *= (1.0 - smoothstep(0.0, 0.05, abs(st.x)) * 0.2); // Slightly dim center line
  }
  // Pattern 3: Vertical/Splatter (Reference Image 4)
  else if (patternType == 3) {
    vec2 p = symmetricSt * vec2(1.3, 1.8); // Adjust core scale
    p += vec2(0.0, -0.3 + sin(t*0.15)*0.04);
    float core = fbm(p + t * 0.07, 7); // More detailed core
    vec2 splatterCoords = symmetricSt * vec2( (2.5 + cos(st.y * 2.5 + t * 0.8) * 0.8) , 1.8 + sin(t*0.6)*0.1); // Adjust splatter shape/movement
    float splatter = fbm(splatterCoords * 1.8 + t*0.12, 5); // More octaves for splatter detail
    pattern = core + splatter * (0.5 + sin(t*0.3)*0.1); // Increase splatter influence
    pattern = smoothstep(0.25, 0.75, pattern); // Wider threshold range
    pattern *= smoothstep(0.9, -0.7, st.y * 0.6); // Adjust vertical fade
  }
  // Pattern 4: Fragmented/Spotted (Reference Image 5)
  else { // patternType == 4
    vec2 p = symmetricSt * vec2(1.6, 2.0) + vec2(0.0, -0.4); // Base coords
    float baseNoise = fbm(p * 1.5 + t * 0.03, 6); // Main structure noise

    vec2 spotCoords = symmetricSt * vec2(3.0, 2.5); // Coords for spots
    spotCoords = rotate(spotCoords, sin(t*0.5)*0.15);
    float spots = fbm(spotCoords * (2.5 + cos(t*0.7)*0.2) + t * 0.08, 4); // Higher frequency noise for spots

    // Mix base and spots, make spots create 'holes' or darker areas
    pattern = baseNoise + spots * 0.6; // Combine noise
    pattern -= smoothstep(0.6, 0.8, spots) * 0.5; // Subtract based on spot noise to create gaps

    pattern = smoothstep(0.35, 0.7, pattern); // Final threshold
    pattern *= smoothstep(-0.8, 0.8, st.y); // Vertical range adjustment
  }

  // Bounding box fade (Unchanged)
  float boundaryFadeX = smoothstep(1.0, 0.9, abs(st.x));
  float boundaryFadeY = smoothstep(1.0, 0.9, abs(st.y));
  pattern *= boundaryFadeX * boundaryFadeY;

  return pattern; // Return raw pattern value
}
// --- End Rorschach Pattern Generation ---

void main() {
  vec2 st = gl_FragCoord.xy / uResolution.xy;
  st = st * 2.0 - 1.0;
  st.x *= uResolution.x / uResolution.y;

  // Calculate pattern based on interpolation
  float pattern1 = rorschach(st, uLastPatternIndex, uTime);
  float pattern2 = rorschach(st, uPatternIndex, uTime);
  float interpolatedPattern = mix(pattern1, pattern2, uBlend);

  // Final threshold and color
  float result = step(0.4, interpolatedPattern); // Apply threshold *after* interpolation
  vec3 color = uColor * result;

  fragColor = vec4(color, result); // Set alpha based on result
} `,w=`#version 300 es
in vec4 aVertexPosition;

void main() {
  gl_Position = aVertexPosition;
} `;function E(e){if(!e){console.error("Canvas element not found!");return}let t=e.getContext("webgl2");if(t)console.log("Using WebGL2 context.");else if(console.log("WebGL2 context unavailable. Falling back to WebGL1."),t=e.getContext("webgl")||e.getContext("experimental-webgl"),t)console.log("Using WebGL1 context.");else{console.error("WebGL context initialization failed."),alert("Unable to initialize WebGL. Your browser may not support it.");return}const i=x(t,t.VERTEX_SHADER,w),n=x(t,t.FRAGMENT_SHADER,I);if(!i||!n)return;const r=F(t,i,n);if(!r)return;const a={program:r,attribLocations:{vertexPosition:t.getAttribLocation(r,"aVertexPosition")},uniformLocations:{resolution:t.getUniformLocation(r,"uResolution"),time:t.getUniformLocation(r,"uTime"),patternIndex:t.getUniformLocation(r,"uPatternIndex"),color:t.getUniformLocation(r,"uColor"),blend:t.getUniformLocation(r,"uBlend"),lastPatternIndex:t.getUniformLocation(r,"uLastPatternIndex")}},p=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,p);const C=[-1,-1,1,-1,-1,1,1,1];t.bufferData(t.ARRAY_BUFFER,new Float32Array(C),t.STATIC_DRAW);let d=0,h=0;const P=5e3,A=5,L=.5;let v=0,f=null;function b(){e.width=e.clientWidth,e.height=e.clientHeight,t&&t.viewport(0,0,e.width,e.height)}b(),window.addEventListener("resize",b);const R=()=>{const m=getComputedStyle(document.documentElement).getPropertyValue("--color-primary")?.trim()||"#000000";let c=0,l=0,u=0;if(m.startsWith("#")){const o=m.substring(1);o.length===3?(c=parseInt(o[0]+o[0],16)/255,l=parseInt(o[1]+o[1],16)/255,u=parseInt(o[2]+o[2],16)/255):o.length===6&&(c=parseInt(o.substring(0,2),16)/255,l=parseInt(o.substring(2,4),16)/255,u=parseInt(o.substring(4,6),16)/255)}else if(m.startsWith("rgb")){const o=m.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);o&&(c=parseInt(o[1])/255,l=parseInt(o[2])/255,u=parseInt(o[3])/255)}return[c,l,u]};function y(s){s*=.001,s-h>P/1e3&&(v=d,d=(d+1)%A,h=s);const c=s-h,l=Math.min(c/L,1);t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),t.enable(t.BLEND),t.blendFunc(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA),t.useProgram(a.program),t.bindBuffer(t.ARRAY_BUFFER,p),t.vertexAttribPointer(a.attribLocations.vertexPosition,2,t.FLOAT,!1,0,0),t.enableVertexAttribArray(a.attribLocations.vertexPosition),t.uniform2f(a.uniformLocations.resolution,e.width,e.height),t.uniform1f(a.uniformLocations.time,s),t.uniform1i(a.uniformLocations.patternIndex,d),t.uniform3fv(a.uniformLocations.color,R()),t.uniform1i(a.uniformLocations.lastPatternIndex,v),t.uniform1f(a.uniformLocations.blend,l),t.drawArrays(t.TRIANGLE_STRIP,0,4),f=requestAnimationFrame(y)}return f=requestAnimationFrame(y),()=>{if(console.log("Cleaning up Rorschach animation"),window.removeEventListener("resize",b),f&&cancelAnimationFrame(f),t){t.deleteProgram(r),t.deleteShader(i),t.deleteShader(n),t.deleteBuffer(p);const s=t.getExtension("WEBGL_lose_context");s&&s.loseContext()}}}function x(e,t,i){const n=e.createShader(t);if(e.shaderSource(n,i),e.compileShader(n),!e.getShaderParameter(n,e.COMPILE_STATUS)){const r=t===e.VERTEX_SHADER?"Vertex":"Fragment";return console.error(`Error compiling ${r} shader:`,e.getShaderInfoLog(n)),e.deleteShader(n),null}return n}function F(e,t,i){const n=e.createProgram();return e.attachShader(n,t),e.attachShader(n,i),e.linkProgram(n),e.getProgramParameter(n,e.LINK_STATUS)?n:(console.error("Error linking shader program:",e.getProgramInfoLog(n)),e.deleteProgram(n),null)}let g=()=>{};function S(){const e=document.getElementById("animation-canvas");e?g=E(e)||(()=>{}):console.error("Rorschach canvas element not found for initialization.")}S();document.addEventListener("astro:before-swap",()=>{console.log("Rorschach: Astro navigating away, cleaning up animation..."),g(),g=()=>{}});document.addEventListener("astro:after-swap",()=>{console.log("Rorschach: Astro navigation complete, setting up animation..."),requestAnimationFrame(S)});

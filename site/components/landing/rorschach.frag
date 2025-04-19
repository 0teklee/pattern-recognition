#version 300 es
precision highp float;

uniform vec2 uResolution;
uniform float uTime;
uniform int uPatternIndex;
uniform vec3 uColor;
uniform float uBlend;
uniform int uLastPatternIndex;

out vec4 fragColor;

// --- 유틸리티 함수 (노이즈, FBM, 회전) ---
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
  float amplitude = 0.55;
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
// --- 유틸리티 함수 끝 ---


// --- 로르샤흐 패턴 생성 ---
float rorschach(vec2 st, int patternType, float time) {
  vec2 symmetricSt = vec2(abs(st.x), st.y);
  float pattern = 0.0;
  float t = time * 0.1; // 느린 시간 효과

  // 패턴 0: 박쥐/나비 (참고 이미지 1)
  if (patternType == 0) {
    vec2 p = symmetricSt * vec2(1, 1); // 약간 넓고 덜 높게 -> Y 스케일 조정
    p.y -= 0.2; // 약간 위로 이동 -> Y 위치 조정
    float wings = fbm(p * (1.01 + st.y  + sin(t*10.2)*0.05) + vec2(t * 0.6, t * 0.01), 8); // 디테일을 위한 더 많은 옥타브
    vec2 bodyCoords = symmetricSt * vec2(0.5, 0.8) * (1.0 + sin(t*0.9)*0.03); // 더 좁은 몸통
    bodyCoords.y -= 0.1 * sin(t * 0.7);
    float body = fbm(bodyCoords + vec2(0.0, t * 0.12), 7); // 몸통 디테일 향상
    pattern = mix(wings, body, smoothstep(0.03, 0.2, abs(st.x))); // 더 날카로운 몸통 혼합
    pattern = smoothstep(0.35, 0.65, pattern); // 밀도 임계값 조정
    pattern += smoothstep(0.1, 0.0, abs(st.x)) * 0.15; // 중앙선 약간 강조
  }
  // 패턴 1: 수평/마스크 (참고 이미지 2)
  else if (patternType == 1) {
    vec2 p = symmetricSt * vec2(2.0 + cos(t*10.5)*0.1, 1.6) - vec2(0.0, 0.4); // 수평 스트레치 강화
    p = rotate(p, sin(t * 0.35) * 0.01);
    float base = fbm(p + t * 0.04, 10); // 흐릿한 모양을 위한 약간 덜한 디테일
    vec2 sideCoords = symmetricSt * vec2(3.0, (1.0 + cos(st.x * 1.5)*0.15));
    sideCoords += vec2(0.0, -0.7 + t*0.06);
    float sides = fbm(sideCoords, 5);
    pattern = mix(base, sides, smoothstep(0.4, 0.6, abs(st.x) + st.y * 0.05)); // 더 넓은 모양을 위해 나중에 혼합
    pattern = smoothstep(0.45, 0.7, pattern); // 임계값 조정
    pattern *= smoothstep(-0.8, -0.2, st.y); // 수직 경계 조정
  }
  // 패턴 2: 해골 (참고 이미지 3)
  else if (patternType == 2) {
    vec2 p = symmetricSt * vec2(1.5, 1.5) * (1.0 + sin(t*0.25)*0.13) - vec2(0.0, 0.1); // 기본 모양 스케일
    float mainShape = fbm(p + t * 0.05, 7); // 상세한 기본 모양


    // 턱/입 영역 (노이즈 더하기)
    vec2 jawCoords = symmetricSt * vec2(1.8, 2.5);
    jawCoords.y += 0.6 + sin(t*10.8)*0.1;
    float jaw = fbm(jawCoords + t*0.3, 6);
    pattern = mix(mainShape, jaw, smoothstep(0.3, 0.7, st.y + 0.5)); // 아래쪽에 턱 혼합


  
    // 코 공간 (빼기)
     vec2 noseCoords = symmetricSt * vec2(2.0, 6.0);
     noseCoords.y += 0.2;
     float nose = fbm(noseCoords + vec2(t * 0.01, 0.0), 4);
     mainShape -= smoothstep(0.5, 0.7, nose) * 0.6 * smoothstep(0.0, 0.1, abs(st.x)); // 코 파내기

  // 눈 (노이즈 빼기)
    vec2 eyeCoords = symmetricSt * vec2(4.0, 3.5);
    eyeCoords.y -= 0.4;
    float eyes = fbm(eyeCoords + vec2(0.0, t * 0.02), 15);
    mainShape -= smoothstep(0.4, 0.6, eyes) * 0.8 * smoothstep(0.05, 0.3, abs(st.x)); // 눈 파내기

    pattern = smoothstep(0.4, 0.75, pattern); // 최종 임계값 조정
    // pattern *= (1.0 - smoothstep(0.0, 0.05, abs(st.x)) * 0.2); // 중앙선 약간 어둡게
  }
  // 패턴 3: 잉크 얼룩 (수정됨)
  else if (patternType == 3) {
    vec2 p = symmetricSt * vec2(1.5, 1.7); // 기본 스케일
    p = rotate(p, sin(t * 0.4 + p.y * 1.5) * 0.2); // 시간과 위치에 따라 회전/왜곡
    p.y += cos(p.x * 3.0 + t * 0.6) * 0.1; // 수직 왜곡 추가
    p.x += sin(p.y * 2.5 + t * 0.5) * 0.08; // 수평 왜곡 추가

    float blotNoise = fbm(p * 1.8 + t * 0.08, 16); // 얼룩 모양을 위한 단일 노이즈 함수

    // 명확한 윤곽선을 위한 더 날카로운 가장자리 -> 부드러운 경계로 변경
    // pattern = step(0.55, blotNoise); // 하드 엣지를 위해 step 함수 사용
    pattern = smoothstep(0.54, 0.56, blotNoise); // 약간 부드러운 경계를 위해 smoothstep 사용

    // 뷰박스 경계 내에서 명확한 윤곽선을 보장하기 위해 패턴 3의 특정 수직 페이드 제거
  }
  // 패턴 4: 조각난/점박이 (참고 이미지 5)
  else { // patternType == 4
    vec2 p = symmetricSt * vec2(1.6, 1.6) + vec2(0.0, -0.1); // 기본 좌표 -> 스케일 및 위치 조정
    float baseNoise = fbm(p * 1.5 + t * 0.03, 6); // 주요 구조 노이즈

    vec2 spotCoords = symmetricSt * vec2(3.0, 2.5); // 점 좌표
    spotCoords = rotate(spotCoords, sin(t*10.5)*0.15);
    float spots = fbm(spotCoords * (2.5 + cos(t*10.7)*0.2) + t * 0.08, 12); // 점을 위한 더 높은 주파수 노이즈

    // 기본 노이즈와 점 혼합, 점이 '구멍'이나 어두운 영역을 만들도록 함
    pattern = baseNoise + spots * 0.9; // 노이즈 결합
    pattern -= smoothstep(0.6, 0.8, spots) * 0.9; // 점 노이즈 기반으로 빼서 간격 생성

    pattern = smoothstep(0.35, 0.9, pattern); // 최종 임계값
    pattern *= smoothstep(-0.7, 0.7, st.y); // 수직 범위 조정 -> 범위 조정
  }

  // 경계 상자 페이드 (변경 없음)
  float boundaryFadeX = smoothstep(1.0, 0.9, abs(st.x));
  float boundaryFadeY = smoothstep(1.0, 0.9, abs(st.y));
  pattern *= boundaryFadeX * boundaryFadeY;

  return pattern; // 원시 패턴 값 반환
}
// --- 로르샤흐 패턴 생성 끝 ---

void main() {
  vec2 st = gl_FragCoord.xy / uResolution.xy;
  st = st * 2.0 - 1.0;
  st.x *= uResolution.x / uResolution.y;

  // 보간 기반 패턴 계산
  float pattern1 = rorschach(st, uLastPatternIndex, uTime);
  float pattern2 = rorschach(st, uPatternIndex, uTime);
  float interpolatedPattern = mix(pattern1, pattern2, uBlend);

  // 최종 임계값 및 색상
  float result = step(0.4, interpolatedPattern); // 보간 *후에* 임계값 적용
  vec3 color = uColor * result;

  fragColor = vec4(color, result); // 결과 기반 알파 설정
} 


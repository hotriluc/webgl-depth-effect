uniform sampler2D uMap;
uniform sampler2D uDepthMap;
uniform vec2 uPlaneSize;
uniform vec2 uImageSize;
uniform vec2 uMouse;
uniform vec2 uThreshold;

varying vec2 vUv;


vec2 mirrored(vec2 v) {
  vec2 m = mod(v,2.);
  return mix(m,2.0 - m, step(1.0 ,m));
}

void main () {

  // using min function we recreate the object-fit: cover
 vec2 ratio = vec2(
    min((uPlaneSize.x / uPlaneSize.y) / (uImageSize.x / uImageSize.y), 1.0),
    min((uPlaneSize.y / uPlaneSize.x) / (uImageSize.y / uImageSize.x), 1.0)
  );
  
  // calculate new uv with new ratio
  vec2 st = vec2(
    vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
    vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
  );

  vec4 depth = texture2D(uDepthMap , st );
  vec2 f = vec2(st.x + (depth.r - 0.5) * uMouse.x / uThreshold.x , st.y +  (depth.r - 0.5) * uMouse.y / uThreshold.y );
  vec4 image = texture2D(uMap , f );

  vec3 res = image.rgb ;

  gl_FragColor = vec4(res, 1.0);
}
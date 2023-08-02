uniform sampler2D uMap;
uniform vec2 uPlaneSize;
uniform vec2 uImageSize;

varying vec2 vUv;

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

 
  vec4 image = texture2D(uMap , st);
  vec3 res = image.rgb ;

  gl_FragColor = vec4(res, 1.);
}
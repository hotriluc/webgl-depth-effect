uniform vec2 u_resolution;
uniform float u_time;

varying vec2 vUv;




void main () {

  vec2 st = vUv / u_resolution.xy ;
  st = st * 2.0 - 1.0 ;
  st.x *= u_resolution.x / u_resolution.y;

 


  gl_FragColor = vec4(vec3(st.x), 1.);
}
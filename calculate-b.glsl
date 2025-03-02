precision highp float;

uniform sampler2D x;
uniform vec2 xDim;

uniform sampler2D M;
uniform vec2 MDim;

void main() {
    vec2 pos = gl_FragCoord.xy - 0.5;

    vec2 mPos = vec2(pos.x * float(**c**), pos.y) + 0.5;
    
    vec2 sum = vec2(0, 0);
    for (int i = 0; i < **c**; i ++) {
        vec4 mpix = texture2D(M, (mPos + vec2(i, 0)) / MDim);
        vec2 mval = mpix.xy;

        float vindex = mpix.z; // x coordinate
        vec2 vpos = vec2(mod(vindex, xDim.x), floor(vindex / xDim.x)) + 0.5;
        vec2 vval = texture2D(x, vpos / xDim).xy;

        sum += vec2(
            mval.x * vval.x - mval.y * vval.y,
            mval.x * vval.y + mval.y * vval.x
        );
    }

    vec4 testpx = texture2D(M, vec2(0.5, pos.y + 0.5) / MDim);
    gl_FragColor = vec4(sum, pos);
}
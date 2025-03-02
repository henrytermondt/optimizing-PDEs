precision highp float;

vec2 gaussian(vec2 pos, float stdev, float speed) {
    vec2 t1 = vec2(
        exp(
            -(pos.x * pos.x + pos.y * pos.y) / (2.0 * stdev * stdev)  
        ),
        0.0
    );

    float phi = speed * pos.x;
    vec2 t2 = vec2(cos(phi), sin(phi));

    return vec2(
        t1.x * t2.x - t1.y * t2.y,
        t1.x * t2.y + t1.y * t2.x
    );
}

void main() {
    vec2 pos = gl_FragCoord.xy - 0.5;
    
    gl_FragColor = vec4(
        1.2 * gaussian(pos / (float(**n**) - 3.0) * float(**l**) - vec2(**cx**, **cy**), float(**l**) * 0.1, 10.0 * 3.141592653589793),
        pos
    );
}
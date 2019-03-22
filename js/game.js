"use strict";

const vertexShaderSource =`
    // YOUR VERTEX SHADER GOES HERE
`;

const fragmentShaderSource = `
    // YOUR FRAGMENT SHADER GOES HERE
`;

// Helper functions to compile shaders

function createShader(gl, type, source) {
    check(isContext(gl), isString(source));
    
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (!success) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
    }
    return shader;
}

function createProgram(gl, vertexShader, fragmentShader) {
    check(isContext(gl), isShader(vertexShader, fragmentShader));

    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    const success = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (!success) {
        console.error(gl.getProgramInfoLog(program));
        gl.deleteProgram(program);
        return null;
    }
    return program;
}


function main() {

    // === Initialisation ===

    // INITIALISATION CODE GOES HERE
    
    // === Per Frame operations ===

    let update = function(deltaTime) {
        // YOUR UPDATE FUNCTION
    };

    let render = function() {
        // YOUR RENDER FUNCTION
    };

}    


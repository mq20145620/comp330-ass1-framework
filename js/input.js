"use strict";

const InputClass = function() {
    const input = this;

    input.leftPressed = false;
    input.rightPressed = false;
    input.upPressed = false;
    input.downPressed = false;

    input.onKeyDown = function(event) {
        switch (event.key) {
            case "ArrowLeft": 
                this.leftPressed = true;
                break;

            case "ArrowRight": 
                this.rightPressed = true;
                break;

            case "ArrowDown":
                this.downPressed = true;
                break;

            case "ArrowUp":
                this.upPressed = true;
                break;
        }
    }

    input.onKeyUp = function(event) {
        switch (event.key) {
            case "ArrowLeft": 
                this.leftPressed = false;
                break;

            case "ArrowRight": 
                this.rightPressed = false;
                break;

            case "ArrowDown":
                this.downPressed = false;
                break;

            case "ArrowUp":
                this.upPressed = false;
                break;
        }
    }

    document.addEventListener("keydown", input.onKeyDown);
    document.addEventListener("keyup", input.onKeyUp);

}

// global inputManager variable
const Input = new InputClass();
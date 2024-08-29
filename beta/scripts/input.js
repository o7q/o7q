let MOUSE_DOWN = false;

document.addEventListener("mousedown", function (e) {
    MOUSE_DOWN = true;
});
document.addEventListener("mouseup", function (e) {
    MOUSE_DOWN = false;
});

document.oncontextmenu = function (e) {
    return false;
}

let MOUSE_VELOCITY = { x: 0, y: 0 };
let MOUSE_SPEED = 0;

let MOUSE_POS = { x: 0, y: 0 };
let MOUSE_POS_PREV = { x: 0, y: 0 };

document.addEventListener("mousemove", function (event) {
    MOUSE_POS_PREV.x = MOUSE_POS.x;
    MOUSE_POS_PREV.y = MOUSE_POS.y;

    MOUSE_POS.x = event.clientX;
    MOUSE_POS.y = event.clientY;

    MOUSE_SPEED = Math.sqrt(
        Math.pow(MOUSE_VELOCITY.x, 2) +
        Math.pow(MOUSE_VELOCITY.y, 2)
    );

    MOUSE_VELOCITY.x = MOUSE_POS.x - MOUSE_POS_PREV.x;
    MOUSE_VELOCITY.y = MOUSE_POS.y - MOUSE_POS_PREV.y;
});
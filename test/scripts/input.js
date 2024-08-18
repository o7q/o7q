let MOUSE_DOWN = false;

document.addEventListener('mousedown', function (e) {
    MOUSE_DOWN = true;
});
document.addEventListener('mouseup', function (e) {
    MOUSE_DOWN = false;
});

function configureElementListeners() {
    document.oncontextmenu = function (e) {
        return false;
    }
}
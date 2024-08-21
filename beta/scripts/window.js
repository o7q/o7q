// framerate code forked from:
// https://stackoverflow.com/a/4787460
FRAMERATE = 0;
DELTA_TIME = 0;
lastLoop = new Date();
function tick() {
    let thisLoop = new Date();
    DELTA_TIME = thisLoop - lastLoop;
    FRAMERATE = 1000 / (DELTA_TIME);
    lastLoop = thisLoop;
}
//

// hardware acceleration detector forked from:
// https://stackoverflow.com/a/77170999
function hardwareAccelerationEnabled() {
    const hasHWA = (() => {
        // create a test function for both "default" drawing and forced software
        const test = (force = false) => {
            // Firefox (at lest on macOS) doesn't accelerate OffscreenCanvas
            const canvas = document.createElement("canvas");
            // willReadFrequently will force software rendering
            const ctx = canvas.getContext("2d", { willReadFrequently: force });
            ctx.moveTo(0, 0),
                ctx.lineTo(120, 121); // HWA is bad at obliques
            ctx.stroke();
            return ctx.getImageData(0, 0, 200, 200).data.join();
        };
        // check that both return different results
        return test(true) !== test(false);
    })();

    return hasHWA;
}
//
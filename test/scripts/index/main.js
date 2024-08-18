window.onload = function () {
    configureElementListeners();

    const jameTexts = document.querySelectorAll(".jame-text");
    jameTexts.forEach(element => {
        element.classList.add("transition");
    });

    spawnCats(1);

    setInterval(() => {
        tick();

        for (let i = 0; i < CATS.length; i++) {
            CATS[i].update();
        }
    }, 1);

    setInterval(() => {
        statsText.textContent = parseInt(FRAMERATE, 10) + " FPS";
    }, 100);

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
    console.log({ hasHWA });
};
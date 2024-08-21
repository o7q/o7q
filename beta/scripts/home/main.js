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

    console.log("Hardware Acceleration Enabed:", hardwareAccelerationEnabled());
};
window.onload = function () {
    document.querySelectorAll(".menu-text__text").forEach(element => {
        function handleHover() {
            if (!JAMES_STUFF_CLICKED) {
                return;
            }
            element.classList.remove("menu-text__text--blur");
            element.removeEventListener("mouseover", handleHover);
        }

        element.addEventListener("mouseover", handleHover);
    });

    const background = document.getElementById("background");
    const backgrounds = [
        "images/backgrounds/space/space.gif",
        "images/backgrounds/space/space2.gif",
        "images/backgrounds/space/space3.gif",
        "images/backgrounds/space/space4.gif",
        "images/backgrounds/space/space5.gif"
    ];
    if (background) {
        background.src = backgrounds[getRandomInt(0, backgrounds.length)];
    }

    const jamesTexts = document.querySelectorAll(".james-text__text");
    jamesTexts.forEach(element => {
        element.classList.add("james-text__text--transition");
        element.addEventListener("mouseover", function () {
            changeFavicon("images/favicon/home/lit.png");
        });
        element.addEventListener("mouseout", function () {
            changeFavicon("images/favicon/home/unlit.png");
        });
    });

    spawnCat(1);

    setInterval(() => {
        tick();

        for (let i = 0; i < CATS.length; i++) {
            CATS[i].update();
        }
    }, 1);

    console.log("Hardware Acceleration Enabed:", hardwareAccelerationEnabled());
};
window.onload = function () {
    loadAudio();
    animate(getRandomBaseIdleAnimation());

    configureElementListeners();

    speak(
        "Hey! I'm Sly! Welcome to my beta test. If you find any bugs, or have any ideas for new features, please message jame!",
        "speak/anim_speak_happy",
        "speak/audio_speak_happy",
        "idle/anim_idle_happy",
        20
    );

    const backdrop = document.getElementById("backdrop");
    const backdrops = [
        "../images/animations/cat/chat/backdrops/space/space.gif",
        "../images/animations/cat/chat/backdrops/space/space2.gif",
        "../images/animations/cat/chat/backdrops/space/space3.gif",
        "../images/animations/cat/chat/backdrops/space/space4.gif",
        "../images/animations/cat/chat/backdrops/space/space5.gif"
    ];
    backdrop.src = backdrops[getRandomInt(0, backdrops.length)];

    setInterval(() => {
        tick();

        let randomAnimation = getRandomInt(0, 50000);

        if (randomAnimation < 8 && CAN_RANDOM_IDLE) {
            animate(getRandomBaseIdleAnimation());
        }

    }, 1);
};
function rageEvent() {
    CAN_RANDOM_IDLE = false;

    let rageResponse = getRageResponse(RAGE_COUNT);

    let response_text = rageResponse.text;
    let response_speak_anim = rageResponse.speakAnim;
    let response_speak_audio = rageResponse.speakAudio;
    let response_idle_anim = rageResponse.idleAnim;
    let response_speed = rageResponse.speed;
    let shouldAbort = false;

    if (RAGE_COUNT >= rageResponse.length / 5) {
        document.body.innerHTML = "";
        let the_void = document.createElement("img");
        the_void.className = "catBackground";
        the_void.draggable = false;
        the_void.style.cursor = "none";
        the_void.src = "../images/backgrounds/events/the_void.gif";
        document.body.append(the_void);
        document.title = "the void";
        changeFavicon("../images/favicon/favicat/event/the_void.png");
        const audio = new Audio("../audio/events/audio_the_void/the_void.mp3");
        audio.loop = true;
        audio.play();

        shouldAbort = true;
    }

    RAGE_COUNT++;

    return {
        text: response_text,
        speakAnim: response_speak_anim,
        speakAudio: response_speak_audio,
        idleAnim: response_idle_anim,
        speed: response_speed,
        abort: shouldAbort
    };
}
function loveEvent() {
    CAN_RANDOM_IDLE = false;

    let loveResponse = getLoveResponse(LOVE_DIALOGUE_INDEX);

    let response_text = loveResponse.text;
    let response_speak_anim = loveResponse.speakAnim;
    let response_speak_audio = loveResponse.speakAudio;
    let response_idle_anim = loveResponse.idleAnim;
    let response_speed = loveResponse.speed;
    let shouldAbort = false;

    if (LOVE_DIALOGUE_INDEX >= loveResponse.length / 5) {

        shouldAbort = true;
    }

    LOVE_DIALOGUE_INDEX++;

    return {
        text: response_text,
        speakAnim: response_speak_anim,
        speakAudio: response_speak_audio,
        idleAnim: response_idle_anim,
        speed: response_speed,
        abort: shouldAbort
    };
}
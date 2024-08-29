// text
// speakAnim
// speakAudio
// idleAnim
// speed

function getLoveResponse(loveIndex) {
    let love_responses = [
        "I- I have to tell you something.",
        "speak/anim_speak_embarrassed",
        "speak/audio_speak_embarrassed",
        "idle/anim_idle_embarrassed",
        40,

        "You have been just so amazing, and nice, and uhh- just so amazing to me.",
        "speak/anim_speak_embarrassed",
        "speak/audio_speak_embarrassed",
        "idle/anim_idle_embarrassed",
        30,

        "No one has ever been this nice to me.",
        "speak/anim_speak_blush2",
        "speak/audio_speak_embarrassed",
        "idle/anim_idle_blush2",
        30,

        "I just want to say.",
        "speak/anim_speak_embarrassed",
        "speak/audio_speak_embarrassed",
        "idle/anim_idle_embarrassed",
        30,

        "I-",
        "speak/anim_speak_embarrassed",
        "speak/audio_speak_embarrassed",
        "idle/anim_idle_embarrassed",
        40,

        "I-",
        "speak/anim_speak_embarrassed",
        "speak/audio_speak_embarrassed",
        "idle/anim_idle_embarrassed",
        60,

        "I love you.",
        "speak/anim_speak_blush",
        "speak/audio_speak_sly",
        "idle/anim_idle_blush",
        20,

        "Oh my.",
        "speak/anim_speak_embarrassed",
        "speak/audio_speak_embarrassed",
        "idle/anim_idle_embarrassed",
        20,

        "I'm sorry.",
        "speak/anim_speak_embarrassed",
        "speak/audio_speak_embarrassed",
        "idle/anim_idle_embarrassed",
        20,

        "This must be super awkward.",
        "speak/anim_speak_embarrassed",
        "speak/audio_speak_embarrassed",
        "idle/anim_idle_embarrassed",
        20,

        "I'm just not used to human interaction like this.",
        "speak/anim_speak_embarrassed",
        "speak/audio_speak_embarrassed",
        "idle/anim_idle_embarrassed",
        20,

        "Please forgive me.",
        "speak/anim_speak_embarrassed",
        "speak/audio_speak_sad",
        "idle/anim_idle_embarrassed",
        20,

        "Just forget this happened.",
        "speak/anim_speak_blush",
        "speak/audio_speak_sly",
        "idle/anim_idle_blush",
        20
    ];

    return {
        text: love_responses[loveIndex * 5],
        speakAnim: love_responses[loveIndex * 5 + 1],
        speakAudio: love_responses[loveIndex * 5 + 2],
        idleAnim: love_responses[loveIndex * 5 + 3],
        speed: love_responses[loveIndex * 5 + 4],
        length: love_responses.length
    };
}
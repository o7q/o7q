let CAN_RANDOM_IDLE = true;

function animate(animation) {
    const cat = document.getElementById("cat");

    switch (animation) {
        case "speak/anim_speak_embarrassed":
        case "idle/anim_idle_embarrassed":
            changeFavicon("../images/favicon/favicat/normal/embarrassed.png");
            break;
        case "speak/anim_speak_happy":
        case "idle/anim_idle_happy":
            changeFavicon("../images/favicon/favicat/normal/happy.png");
            break;
        case "speak/anim_speak_sad":
        case "idle/anim_idle_sad":
            changeFavicon("../images/favicon/favicat/normal/sad.png");
            break;
        case "speak/anim_speak_scary":
            changeFavicon("../images/favicon/favicat/normal/scary.png");
            break;
        case "idle/anim_speak_sly":
        case "idle/anim_idle_sly":
        case "idle/anim_idle_sly2":
        case "idle/anim_idle_phone":
        case "idle/anim_idle_phone2":
        case "idle/anim_idle_phone3":
        case "idle/anim_idle_phone4":
        case "idle/anim_idle_phone5":
        case "idle/anim_idle_phone6":
            changeFavicon("../images/favicon/favicat/normal/sly.png");
            break;
        case "speak/anim_speak_surprised":
        case "idle/anim_idle_surprised":
            changeFavicon("../images/favicon/favicat/normal/surprised.png");
            break;
        case "speak/anim_speak_thinking":
        case "idle/anim_idle_thinking":
            changeFavicon("../images/favicon/favicat/normal/thinking.png");
            break;
        case "speak/anim_speak_upset":
        case "idle/anim_idle_upset":
            changeFavicon("../images/favicon/favicat/normal/upset.png");
            break;
    }

    if (cat) {
        cat.src = `../images/animations/cat/chat/${animation}/960x540_12.gif`;
    }
}

function getRandomBaseIdleAnimation() {
    const BASE_IDLE_ANIMATIONS = [
        "idle/anim_idle_sly",
        "idle/anim_idle_sly2",
        "idle/anim_idle_phone",
        "idle/anim_idle_phone2",
        "idle/anim_idle_phone3",
        "idle/anim_idle_phone4",
        "idle/anim_idle_phone5",
        "idle/anim_idle_phone6"
    ];
    return BASE_IDLE_ANIMATIONS[getRandomInt(0, BASE_IDLE_ANIMATIONS.length)];
}
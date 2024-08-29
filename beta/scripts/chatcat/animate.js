let CAN_RANDOM_IDLE = true;

function animate(animation) {
    const cat = document.getElementById("cat");

    switch (animation) {
        case "speak/anim_speak_embarrassed":
        case "idle/anim_idle_embarrassed":
            changeFavicon("../images/favicon/chatcat/normal/embarrassed.png");
            break;
        case "speak/anim_speak_happy":
        case "idle/anim_idle_happy":
            changeFavicon("../images/favicon/chatcat/normal/happy.png");
            break;
        case "speak/anim_speak_sad":
        case "idle/anim_idle_sad":
            changeFavicon("../images/favicon/chatcat/normal/sad.png");
            break;
        case "speak/anim_speak_scary":
        case "idle/anim_idle_scary":
            changeFavicon("../images/favicon/chatcat/normal/scary.png");
            break;
        case "speak/anim_speak_blush":
        case "idle/anim_idle_blush":
            changeFavicon("../images/favicon/chatcat/normal/blush.png");
            break;
        case "speak/anim_speak_blush2":
        case "idle/anim_idle_blush2":
            changeFavicon("../images/favicon/chatcat/normal/blush2.png");
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
            changeFavicon("../images/favicon/chatcat/normal/sly.png");
            break;
        case "speak/anim_speak_surprised":
        case "idle/anim_idle_surprised":
            changeFavicon("../images/favicon/chatcat/normal/surprised.png");
            break;
        case "speak/anim_speak_thinking":
        case "idle/anim_idle_thinking":
            changeFavicon("../images/favicon/chatcat/normal/thinking.png");
            break;
        case "speak/anim_speak_upset":
        case "idle/anim_idle_upset":
            changeFavicon("../images/favicon/chatcat/normal/upset.png");
            break;
    }

    if (cat) {
        cat.src = `../scenes/chatcat/animations/${animation}/960x540_12.gif`;
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
let textIntervalId;
function speak(text, speakAnim, speakAudio, idleAnim, speed) {
    CAN_RANDOM_IDLE = false;

    animate(speakAnim);

    if (textIntervalId) {
        clearInterval(textIntervalId);
    }

    const textBox = document.getElementById("cat-text");
    const textBackground = document.getElementById("cat-text-background");

    let i = 0;

    textIntervalId = setInterval(() => {
        if (i < text.length) {
            if (!ALLOW_SPEAKING) {
                clearInterval(textIntervalId);
                textIntervalId = null;

                CAN_RANDOM_IDLE = true;

                return;
            }

            const newString = text.substring(0, i + 1);
            textBox.textContent = newString;

            const size = getElementDimensionsInVwVh(textBox);

            textBackground.style.width = size.width + 4 + "vw";
            textBackground.style.height = size.height + 4 + "vh";
            textBackground.style.display = "block";

            if (ALLOW_AUDIO) {
                playRandomSpeakAudio(speakAudio);
            }

            i++;
        }
        else {
            
            clearInterval(textIntervalId);
            textIntervalId = null;
            animate(idleAnim);
            
            CAN_RANDOM_IDLE = true;

            const regex = /\b[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}(?:\/[^\s]*)?\b/g;

            textBox.innerHTML = textBox.innerHTML.replace(regex, function (url) {
                return '<a href="https://' + url + '" target="_blank">' + url + '</a>';
            });
        }

    }, speed);
}

function getElementDimensionsInVwVh(element) {
    const widthInPx = element.offsetWidth;
    const heightInPx = element.offsetHeight;

    const viewportWidthInPx = window.innerWidth;
    const viewportHeightInPx = window.innerHeight;

    const widthInVw = (widthInPx / viewportWidthInPx) * 100;
    const heightInVh = (heightInPx / viewportHeightInPx) * 100;

    return {
        width: widthInVw,
        height: heightInVh
    };
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("user-text-input").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            if (this.value === "" || !this.value) {
                return;
            }
            talk(this.value);
            this.value = "";
        }
    });
});
let JAMES_STUFF_CLICKED = false;

function jamesStuffClick() {
    const jamesTexts = document.querySelectorAll(".james-text__text");
    jamesTexts.forEach(element => {
        element.classList.remove("james-text__text--first");
        element.classList.remove("james-text__text--second");
        element.classList.remove("james-text__text--transition");
        element.classList.add("james-text__text--move");
        element.classList.add("james-text__text--transition--clicked");
    });

    const jamesText1 = document.getElementById("james-text__text--first");
    const jamesText2 = document.getElementById("james-text__text--second");

    jamesText1.classList.add("james-text__text--first--clicked");
    jamesText2.classList.add("james-text__text--second--clicked");

    const menuText = document.getElementById("menu-text");
    menuText.style.opacity = 1;
    menuText.style.pointerEvents = 'auto';

    JAMES_STUFF_CLICKED = true;
}
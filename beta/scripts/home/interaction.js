function jamestuffClick()
{
    const jameTexts = document.querySelectorAll(".jame-text");
    jameTexts.forEach(element => {
        element.classList.remove("first");
        element.classList.remove("second");
        element.classList.remove("transition");
        element.classList.add("move");
        element.classList.add("transition2");
    });

    const jameText1 = document.getElementById("jame-text-first");
    const jameText2 = document.getElementById("jame-text-second");

    jameText1.classList.add("first2");
    jameText2.classList.add("second2");
}
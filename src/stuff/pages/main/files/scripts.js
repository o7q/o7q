function pageInit()
{
    constrainMobile();
    welcomeText();
}

// constrain mobile
function constrainMobile()
{
    if (mobileCheck() == true) openPage("replace", "../stuff/index.html");
}

function welcomeText()
{
    const message =
    [
        "Welcome to "
        // "You are viewing ",
        // "You are on "
    ];
    const messageWidth =
    [
        152
        // 206,
        // 136
    ];

    let randMsg = Math.floor(Math.random() * message.length);

    changeWelcomeText(message[randMsg], messageWidth[randMsg])
}
function changeWelcomeText(message, messageWidth)
{
    document.getElementById("jsRandomText").innerHTML = message + " ";
    document.querySelector(".arrowImg").style.transform = "translateX(" + messageWidth + "px)";
}
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
    const messageOverride = ["Welcome to", 152];
    let message =
    [
        "Welcome to", 152,
        "You are viewing", 206,
        "You are on", 136
    ];

    let randMsg = Math.floor(Math.random() * message.length);
    if (randMsg % 2 != 0) randMsg--;

    if (messageOverride[0] != "")
    {
        message[randMsg] = messageOverride[0];
        message[randMsg + 1] = messageOverride[1];
    }

    document.getElementById("jsRandomText").innerHTML = message[randMsg] + " ";
    document.querySelector(".arrowImg").style.transform = "translateX(" + message[randMsg + 1] + "px)";
}
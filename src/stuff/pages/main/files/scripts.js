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
    let doCustomMessage = false;

    if (doCustomMessage == false)
    {
        document.getElementById("jsRandomText").innerHTML = "Welcome to ";
        document.querySelector(".arrowImg").style.transform = "translateX(152px)";
        return;
    }

    const messageOverride = ["", 0];
    let message =
    [
        "Hi", 29,
        "Hey", 49,
        "Hello", 69
    ];

    let randMsg = Math.floor(Math.random() * message.length);
    if (randMsg % 2 != 0) randMsg--;

    if (messageOverride[0] != "")
    {
        message[randMsg] = messageOverride[0];
        message[randMsg + 1] = messageOverride[1];
    }

    document.getElementById("jsRandomText").innerHTML = message[randMsg] + ", welcome to ";
    document.querySelector(".arrowImg").style.transform = "translateX(" + (message[randMsg + 1] + 163) + "px)";
}
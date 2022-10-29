// o7qstuffutils by o7q

// page actions

// constrain mobile
function constrainMobile()
{
    if (mobileCheck() == true) openPage("replace", "assets/pages/basic/index.html");
}

// open root from basic
function openRootFromBasic()
{
    if (mobileCheck() == false) openPage("replace", "../../../index.html");
}

// functions

// open page
function openPage(mode, url)
{
    if (mode == "new") window.open(url);
    if (mode == "replace") window.location.assign(url);
}

// mobile check
function mobileCheck()
{
    return /android|iphone|ipad|ipod|webos|blackberry|iemobile|opera mini/i.test(navigator.userAgent) == true ? true : false;
}
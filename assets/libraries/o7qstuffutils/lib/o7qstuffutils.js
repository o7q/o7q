// o7qstuffutils by o7q

// open page
function openPage(openMode, url)
{
    if (openMode == "new") window.open(url);
    if (openMode == "replace") window.location.assign(url);
}

// mobile teleport
function mobileTP()
{
    if (mobileCheck() == true) openPage('replace', 'assets/pages/basic/index.html');
}

// return home
function returnHome()
{
    if (mobileCheck() == false) openPage('replace', '../../../index.html');
}

// mobile check
function mobileCheck()
{
    return /android|iphone|ipad|ipod|webos|blackberry|iemobile|opera mini/i.test(navigator.userAgent) == true ? true : false;
}
// o7qstuffutils by o7q

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
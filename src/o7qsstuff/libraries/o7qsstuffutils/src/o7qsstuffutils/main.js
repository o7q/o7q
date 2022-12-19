// o7qstuffutils by o7q

// functions

// open page
function openPage(mode, url)
{
    switch(mode)
    {
        case "new": window.open(url); break;
        case "replace": window.location.assign(url); break;

        default:
            var err = "openPage Error:\n\nCould not open page: Invalid mode '" + mode + "'";
            alert(err); console.error(err);
            return;
    }
}

// mobile check
function mobileCheck()
{
    return /android|iphone|ipad|ipod|webos|blackberry|iemobile|opera mini/i.test(navigator.userAgent) == true ? true : false;
}
function doAction(action, input)
{
    if (action == "openLink") window.open(input);
    if (action == "assignLink") window.location.assign(input);
}
// framerate code forked from
// https://stackoverflow.com/a/4787460
FRAMERATE = 0;
DELTA_TIME = 0;
lastLoop = new Date();
function tick() {
    let thisLoop = new Date();
    DELTA_TIME = thisLoop - lastLoop;
    FRAMERATE = 1000 / (DELTA_TIME);
    lastLoop = thisLoop;
}
//
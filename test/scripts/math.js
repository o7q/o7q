function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getElementPosition(element) {
    const rect = element.getBoundingClientRect();
    return {
        x: rect.left + window.scrollX,
        y: rect.top + window.scrollY
    };
}

function getSnappedAngle(x, y, destX, destY) {
    const deltaX = x - destX;
    const deltaY = y - destY;

    const radians = Math.atan2(deltaY, deltaX);

    let degrees = radiansToDegrees(radians);

    // angle = (angle + 360) % 360;
    // angle = (180 - angle + 360) % 360;

    degrees = (180 - degrees) % 360;
    if (degrees < 0) degrees += 360;

    const snappedAngle = nearest(
        degrees,
        [0, 45, 90, 135, 180, 225, 270, 315]
    ).value;
    return snappedAngle;
}

function radiansToDegrees(radians) {
    return (180 / Math.PI) * radians;
}

function nearest(input, set) {
    let nearestIndex = 0;
    let lowestDistance = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < set.length; i++) {
        let distance = Math.abs(input - set[i]);

        if (distance < lowestDistance) {
            lowestDistance = distance;
            nearestIndex = i;
        }
    }

    return {
        value: set[nearestIndex],
        index: nearestIndex
    };
}

function unixToDays(ms)
{
    return ms / 1000 / 60 / 60 / 24;
}
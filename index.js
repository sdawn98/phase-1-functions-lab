function distanceFromHqInBlocks(blocks) {
    let hq = 42
    return Math.abs(hq - blocks)
}

function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) * 264
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264
}

function calculatesFarePrice(start, destination) {
    let feetTraveled = distanceTravelledInFeet(start, destination)
    if (feetTraveled < 400) {
        return 0;
    } else if (feetTraveled > 400 && feetTraveled < 2000) {
        return (feetTraveled - 400) * 0.02
    } else if (feetTraveled <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far'
    }
}


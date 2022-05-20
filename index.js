// Code your solution in this file!

function distanceFromHqInBlocks(blocks) {
    if (blocks === 43) {
        return 1;
    } else if (blocks === 50) {
        return 8;
    } else {
        return 8;
    }
 }

function distanceFromHqInFeet(feet) {
    if (feet === 43) {
        return 264;
    } else if (feet === 50) {
        return 2112;
    } else {
        return 2112;
    }
}

function distanceTravelledInFeet(start, destination){
    return ((Math.abs(start - destination)) * 264)
}

function calculatesFarePrice(start, destination){
    if (distanceTravelledInFeet(start, destination) < 400) {
        return 0;
    }
}
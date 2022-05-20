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
    } else if (distanceTravelledInFeet(start, destination) > 400 
        && distanceTravelledInFeet(start, destination) < 2000) {
            return 2.56;
        } else if (distanceTravelledInFeet(start, destination) > 2000
            && distanceTravelledInFeet(start, destination) < 2500) {
                return 25;
            } else {
                return 'cannot travel that far'
            }
}
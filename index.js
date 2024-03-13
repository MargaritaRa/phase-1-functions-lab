function distanceFromHqInBlocks(userLocation) { 
    const headquartersLocation = 42;
    const distance = Math.abs(userLocation - headquartersLocation);
    return distance;  
}

console.log(distanceFromHqInBlocks(41));

function distanceFromHqInFeet(userLocation) {
    const blocks = distanceFromHqInBlocks(userLocation);
    const feetPerBlock = 264;
    const distanceInFeet = blocks * feetPerBlock;
    return distanceInFeet;
}
function distanceTravelledInFeet(start, destination) {
    const blocks = Math.abs(start - destination);
    const feetPerBlock = 264;
    const distanceInFeet = blocks * feetPerBlock;
    return distanceInFeet;
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let farePrice;
    if (distance <= 400){
        farePrice = 0;
    } else if ( distance > 400 && distance <= 2000){
        farePrice = (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500){
        farePrice = 25;
    } else {
        farePrice = "cannot travel that far";
    }
        return farePrice;
}
console.log(calculatesFarePrice(43, 42));

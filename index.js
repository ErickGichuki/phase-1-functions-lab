// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber){
    const hqBlock = 42;
    return Math .abs(blockNumber - hqBlock);
}
function distanceFromHqInFeet(blockNumber){
    const feetPerBlock = 264;
    const distanceInBlocks = Math.abs(blockNumber - 42);
    return distanceInBlocks * feetPerBlock;
}
function distanceTravelledInFeet(startBlock, endBlock){
    let startDistance = distanceFromHqInFeet(startBlock);
    let endDistance = distanceFromHqInFeet(endBlock);
    return Math.abs(endDistance - startDistance);
}
function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination);
    if(distance <= 400){
        return 0;
    }else if(distance > 400 && distance <= 2000){
        return (distance - 400) * 0.02;
    }else if(distance >2000 && distance <= 2500){
        return 25;
    }else{
        return 'cannot travel that far';
    }
}
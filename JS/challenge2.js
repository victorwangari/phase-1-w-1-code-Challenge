// culculate speed points
function getSpeedPoints (speed){
   const speedLimit = 70 
   const speedPerDemeritPoint = 5
   const maximumDemeritPoints = 12
   if(speed<70){
    return "OK"}
//license suspentions points
 const points = Math.floor((speed - speedLimit) / speedPerDemeritPoint);{
    if(points >= maximumDemeritPoints){
        return "License suspended"
    }
    else {
        return `${points}`
    }

}
}
    console.log(getSpeedPoints(170));
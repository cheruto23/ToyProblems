//speed of the car function
function carSpeed(speed){
    if(speed<70){
        console.log("ok");
//condition when speed is over 70km/h and calculating demerits points
    }else{
        const demeritPoints = (speed - 70)/5;
        if(demeritPoints<12){
            console.log(demeritPoints);
//what to return when demerit points are more than 12 points
        }else{
             console.log("License suspended");
        }
    }
}
const speed = parseFloat(prompt('Enter your speed: '));
carSpeed(speed);


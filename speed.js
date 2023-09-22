//speed of the car function
function carSpeed(speed){
    if(speed<70){
        return "ok"
//condition when speed is over 70km/h and calculating demerits points
    }else{
        const demeritPoints = (speed - 70)/5;
        if(demeritPoints<12){
            return demeritPoints;
//what to return when demerit points are more than 12 points
        }else{
            return "License suspended";
        }
    }
}


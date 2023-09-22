function carSpeed(speed){
    if(speed<70){
        return "ok"
    }else{
        const demeritPoints = (speed - 70)/5;
        if(demeritPoints<12){
            return demeritPoints;
        }else{
            return "License suspended";
        }
    }
}


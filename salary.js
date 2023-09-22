function NHIFDeductions(salary){
    if(salary<= 5,999){
        return 150;
    }else if(salary>=6000 && salary<=7999){
        return 300;
    }else if(salary>=8000 && salary<=11999){
        return 400;
    }else if(salary>=12000 && salary<=14999){
        return 500;
    }else if(salary>=15000 && salary<=19999){
        return 600;
    }else if(salary>=20000 && salary<=24999){
        return 750;
    }else if(salary>=25000 && salary<=29999){
        return 850;
    }else if(salary>=30000 && salary<=34999){
        return 900;
    }else if(salary>=35000 && salary<=39999){
        return 950;
    }else if(salary>=40000 && salary<=44999){
        return 1000;
    }else if(salary>=45000 && salary<=49999){
        return 1100;
    }else if(salary>=50000 && salary<=59999){
        return 1200;
    }else if(salary>=60000 && salary<=69999){
        return 1300;
    }else if(salary>=70000 && salary<=79999){
        return 1400;
    }else if(salary>=80000 && salary<=89999){
        return 1500;
    }else if(salary>=90000 && salary<=99999){
        return 1600;
    }else{
        return 1700;
    }
}




    
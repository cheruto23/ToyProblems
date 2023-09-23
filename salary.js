//function to calculate NHIF deductions according to salary one inputs
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

//function to calculate payerates according to salary one inputs
function PAYERates(salary){
    if(salary<=24000){
        return (salary * 0.1);
    }else if(salary>=24001 && salary<=32333){
        return (salary * 0.25);
    }else if(salary>=32334 && salary<=500000){
        return (salary * 0.30);
    }else if(salary>=500001 && salary<=800000){
        return (salary * 0.325);
    }else{
        return (salary * 0.40);
    }
}


//Prompt message to enter salary and benefits
const salary = parseFloat(prompt('Enter your salary: '));
const benefits = parseFloat(prompt('Enter your benefits: '));

//Defini9ng variables to calculate gross salary, net salary and deductions
const NHIF = NHIFDeductions(salary);
const PAYE = PAYERates(salary);
const NSSFRates = salary * 0.06;
const grossSalary = salary + benefits;
const housingLevy = grossSalary * 0.015;
const netSalary = grossSalary - (NHIF + PAYE + NSSFRates + housingLevy);

//Alert messages employee gets after inputing salary and deductions
alert(`NHIF Deductions: ${NHIFDeductions(salary)}ksh`);
alert(`PAYE: ${PAYERates(salary)} Ksh`);
alert(`NSSF Deductions: ${NSSFRates} Ksh`);
alert(`Gross Salary: ${grossSalary}ksh`);
alert(`Housing Levy: ${housingLevy} Ksh`);
alert(`Net Salary: ${netSalary} Ksh`);












    
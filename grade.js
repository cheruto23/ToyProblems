//function to check marks and grade

function studentMarks(marks){
    if(marks>79){
        return"A";
    }else if(marks>=60 && marks<=79){
        return"B";
    }else if(marks>=50 && marks<=59){
        return"C";
    }else if(marks>=40 && marks<=49){
        return"D";
    }else{
        return"F";
    }
}

//function to prompt user to enter marks and check whether it is a valid number

function inputMarks(){
    const marks = parseFloat(prompt("Enter marks"));
    if(!isNaN(marks) && marks>=0 && marks<=100){
        alert(`Students grade is : ${studentMarks(marks)}`);
    }else{
        alert("Please enter valid marks");
    }
}

inputMarks();
let.button = getElementById('btn');

function calc() {
    let num = parseInt(document.getElementById("txtNum").value);
    let name = parseInt(document.getElementById("txtName").value);
    let hrs = parseInt(document.getElementById("txtHours").value);
    let empCode = parseInt(document.getElementById("txtCode").value); 
    let master = parseInt(document.getElementById("chooseFaculty").value);
    let bachelor = parseInt(document.getElementById("chooseRegular").value);
    let fixedSal = parseInt(document.getElementById("txtFixSal").value);
    let empType;
    let incomeTax;    

    if(empCode == 'f' || empCode == 'F') {
    
        if(master.checked) {
            perHour = 175;
            allowance = 1500; //per month
        }
        else if(bachelor.checked) {
            perHour = 100;
            allowance = 600; //per month
        }
    
        grosSalary = hrs * perHour + allowance;

        if (grosSalary > 3000) {
            incomeTax = (.25/grosSalary)*100;
        }
  
        else if (gross_sal = 2500) {
            income_tax = 'tax free';
        }
  
        if (gross_sal > 3000) {
            healthFee = 33;
        }
        else {
            healthFee = 19.2;
    }
    netPay = (hrs * perHour + allowance) - (healthFee + incomeTax);

    if (empCode == 'R' || empCode == 'r' )
    //enter working hour for 'regular' 
    if (hrs == 160) {
        grosSalary = fixedSal;
        
    }
    else if (hrs < 160) {
        hrlyRate = fixedSal/160;
        proRate = hrlyRate * hrs;
    }
    
    else if (hrs > 160) {
        overRate = (hrs - 160)*2;
    }
    

    
}
}

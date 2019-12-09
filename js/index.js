let.button = getElementById('btn');

function calc() {
    let num = parseInt(document.getElementById("txtNum").value);
    let name = parseInt(document.getElementById("txtName").value);
    let hrs = parseInt(document.getElementById("txtHours").value);
    let empCode = parseInt(document.getElementById("txtCode").value); 
    let master = parseInt(document.getElementById("chooseFaculty").value);
    let bachelor = parseInt(document.getElementById("chooseRegular").value);
    let fixedSal = parseInt(document.getElementById("txtFixSal").value);
    let staff;
    let perHour;
    let allowance;
    let grosSalary;
    let incomeTax;
    let healthFee;
    let netPay;
    let staff;    

    if(empCode == 'f' || empCode == 'F') {
    staff = 'faculty';
        if(master.checked) {
            perHour = 175;
            allowance = 1500; //per month
        }
        else if(bachelor.checked) {
            perHour = 100;
            allowance = 600; //per month
        }
    
        grosSalary = hrs * perHour + allowance;
        
        //taxFee
        if (grosSalary > 3000) {
            incomeTax = ((.25/grosSalary)*100)-2500;
        }
  
        if (grosSalary > 3000) {
            healthFee = 33;
        }
        else {
            healthFee = 19.2;
    }
    netPay = (hrs * perHour + allowance) - (healthFee + incomeTax);

    if (empCode == 'R' || empCode == 'r' )
    staff = 'regular';
    //enter working hour for 'regular' 

    if (hrs == 160) {
        grosSalary = fixedSal;
        fixedSal = hrlyRate * 160;
        
    }
    //proRate
    else if (hrs < 160) {
        hrlyRate = fixedSal/160;
        grosSalary = hrlyRate * hrs;
    }
    //overRate
    else if (hrs > 160) {
        grosSalary = (hrs - 160)*2;
    }
    
    //taxFee
    if (grosSalary > 3000) {
        incomeTax = (.25/grosSalary)*100;
    }

    else if (grosSalary = 2500) {
        incomeTax = 'tax free';
    }

    if (grosSalary > 3000) {
        healthFee = 33;
    }
    else {
        healthFee = 19.2;
}
netPay = grosSalary - (healthFee + incomeTax);       
}
let calcGrosSal = document.getElementById('grosSal');
calcGrosSal.innerHTML=`${grosSalary}`;
let calcIncomeTax = document.getElementById('incomeTax');
calcGrosSal.innerHTML=`${incomeTax}`;
let calcHealthFee = document.getElementById('healthFee');
calcGrosSal.innerHTML=`${healthFee}`;
let calcTotal = document.getElementById('total');
calcGrosSal.innerHTML=`${netPay}`;
}
button.addEventListener('click',calc);
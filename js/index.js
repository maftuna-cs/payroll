let.button = getElementById('btn');

function calc() {
    let num = parseInt(document.getElementById("txtNum").value);
    let name = parseInt(document.getElementById("txtName").value);
    let hrs = parseInt(document.getElementById("txtHours").value);
    let empCode = parseInt(document.getElementById("txtCode").value); 
    let master = parseInt(document.getElementById("chooseFaculty").value);
    let bachelor = parseInt(document.getElementById("chooseRegular").value); 
    let incomeTax;    

    if(empCode == 'f' || empCode == 'F' ) {
    
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
            incomeTax = (grosSalary - 2500) * .25;
            health = 33; 
            net = grosSalary - incomeTax - health ;
        }
  
        else if (gross_sal > 2500 && gross_sal < 3000) {
            income_tax = (gross_sal - 2500) * 0.25;
            health = 19.20;
            net = gross_sal - income_tax - health;
            paySlip();
        }
  
        else if (gross_sal < 2500) {
            income_tax = "No Income tax deducted."
            health = 19.20;
            net = gross_sal - health;
            paySlip();
        }
    
    }
    
    
    
}

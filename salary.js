// call readline
    const readline = require('readline');
    const input = readline.createInterface(
        {
            input: process.stdin,
            output: process.stdout
        }
    );
    // ask a questionto interact with user.
    input.question("What is your Gross Salary?\n", function (grossPay){
        console.log(`your gross salary is: ${grossPay}`);
        // declare all variable using let
        let paye;
        let extraTaxablePay;
        let nhif;
        let nssf= 200;
        let totalDeduction;
        let netSalary;
        // use if else to calculate the paye and the Extra taxes to be paid if gross pay is more than 24000
        if (grossPay < 24001){
            paye = grossPay * 0.1;
        }else if (grossPay < 32334){
            paye = 2400;
            extraTaxablePay = grossPay - 2400
            paye = (extraTaxablePay * 0.25) + paye;
        }else {
            paye = 4483;
            extraTaxablePay = grossPay - 32333;
            paye = (extraTaxablePay * 0.30) + paye;       
        }
        // calculate the nhif 
        if (grossPay < 6000){
            nhif = 150;
        }else if(grossPay < 8000){
            nhif = 300;
        }else if(grossPay < 12000){
            nhif = 400;
        }else if(grossPay < 15000){
            nhif = 500;
        }else if(grossPay < 20000){
            nhif = 600;
        }else if(grossPay < 25000){
            nhif = 700;
        }else if(grossPay < 30000){
            nhif = 850;
        }
        else if(grossPay > 35000){
            nhif = 900;
        } else {
            nhif = 950
        }
    
        totalDeduction = nhif + paye + nssf;
        netSalary = grossPay - totalDeduction;
        process.stdout.write(`Your P.A.Y.E is Ksh: ${paye}\n`);
        process.stdout.write(`Your NHIF deduction pay is Ksh: ${nhif}\n`);
        process.stdout.write(`Your standard NSSF deduction is Ksh: ${nssf}\n`);    
        process.stdout.write(`Your Net Salary is Ksh: ${netSalary}\n`);    
        input.close();
    });
    
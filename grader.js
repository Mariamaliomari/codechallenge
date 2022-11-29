//  call readline
const readline = require('readline');
const input = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);
// ask a question to interact with user.
input.question("Enter marks: ", function (mark,){ 
    // input mark in base 10 format
    let marks = parseInt(mark, 10);
    
    
    // callback function for marks
    if (isNaN(marks) || marks > 100 ){
        process.stdout.write("Please Enter a valid number\n");
        process.exit(1)
    }else{
        // a nested if statement for the marks 
         if (marks < 40 ) {
            process.stdout.write("E\n");    
        } else if (marks < 50) {
            process.stdout.write("D\n");    
        } else if (marks < 60) {
            process.stdout.write("C\n");
        } else if (marks < 80) {
            process.stdout.write("B\n");
        } else {
            process.stdout.write("A\n");
        }
        
    } 
    // closing the input 
    input.close();
});
        

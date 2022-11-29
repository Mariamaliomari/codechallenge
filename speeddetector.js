// call readline
const readline = require('readline');
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    //declare the function speed and allow input in base 10 format
});input.question("Speed of car: ", function (speed){ 
    let speedOfCar = parseInt(speed, 10);
    //return NaN if no integer is found
    if (isNaN(speed)){
       // print out a numerical value when promting input
        process.stdout.write("Speed should be a numerical value\n");
        process.stdout.write("Use this as follows: On prompt input as numerical value e.g 60\n");
        //exit with success
        process.exit(1)

    }else{
       if (speedOfCar < 70){
        process.stdout.write("Ok!\n");
       } else{
        const demeritPoints = ((speedOfCar - 70) / 5);
        //math.ceil demerit points to round the points to e.g 6.4 point to 7
        Math.ceil(demeritPoints);
        process.stdout.write(`Points: ${demeritPoints}\n`);
            if (demeritPoints >= 12) {
                process.stdout.write("License suspended.\n");                
            } else {
                //exiting with failure
                process.exit(0);                
            }
       }
    }
    input.close();
});
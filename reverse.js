function reverseFunction(num){ // function to find the reverse of a  number
    let reversed=0;//initialize reversed =0
    while(num>0) // checking the number is greater than zero using while loop
        {

      let  last_digit=num % 10; // Taking the last digit of the number 
        reversed=reversed * 10 + last_digit;// append the number to the reversed
        num = Math.floor(num / 10);// removing the last digit 

    }
    return reversed;
}
let number=2345;// Input the number 
console.log("Reverse of a number :",reverseFunction(number));//Printing the reverse of the number
// Write a program to find the prime number
function prime(num){
    if (num <= 1) // if the the given number is less than or equal to 1 then it is not a prime number
    {
        return false;
    }
    for (let i=2;i<=num;i++) // loop start from 2 because prime numbers start from 2
        {
            if (num % i === 0){ // If num is divisible by i, it's not prime
                return false;

            }
            return true;

    }
   
}
let number=11;
console.log("The given number is prime=", prime(number));
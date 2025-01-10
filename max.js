//write a program to find the biggest number in an array ?

function findMax(arr){ //creating a function called findMax for the finding the maximum number of array

    let max = arr[0];
    let n = arr.length;// find the length of the array and store the value in the variable n

    for(let i=1; i<n; i++)//Start the loop from one
        {
        if(arr[i] > max )// check the  number is greater than max

        {
                max=arr[i];

        }
        
    }
return max; // return max after the n iteration



}





let numbers = [1 , 2 , 3 , 5]//Array input
console.log("Largest number in an array is :",findMax(numbers));//printing the largest number in the array
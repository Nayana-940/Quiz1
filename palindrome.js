//Write a program to return the longest palindromic substring?
   // Input: s = "babad"
    //Output: "bab"
    //Explanation: "aba" is also a valid answer.


    let s = "babad";
let longest = "";

for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
        let substring = s.slice(i, j);
        let reversed = substring.split('').reverse().join(''); // Reverse the substring
        
        if (substring === reversed && substring.length > longest.length) {
            longest = substring;
        }
    }
}

console.log("Longest palindromic substring:", longest);  // Output: "bab" or "aba"



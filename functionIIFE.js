//caps Letter
const name = (function(array) {
    let str = array.toLowerCase().split(" ")
  console.log(str)
  for(let i =0;i<str.length;i++){
      str[i] = str[i].charAt(0).toUpperCase()+str[i].slice(1)
      //str[i]=str[i].charAt(0).toUpperCase()+ str[i].slice(1)
      
  }
  console.log(str)
})("leaRninG js iS eaSy")

//find palindrome

const isPalindrome2 = (function(el) {
    const str = String(el);
    let i = 0;
    let j = str.length - 1;
    while(i < j) {
       if(str[i] === str[j]) {
          i++;
          j--;
       }
       else {
          return false;
       }
    }
    return true;
 })['carecar', 1344, 12321, 'did', 'cannot'];
 const findPalindrome2 = function(arr) {
    return arr.filter(el => isPalindrome2(el));
 };

// odd numbers
const oddValue3 = (function(arr){
    for(i=0; i<arr.length; i++){
        if(arr[i]%2!=0){
            console.log(arr[i])
        }
    }
})("1 2 3 4 5");

//prime number

var a = [5, 9, 63, 29, 35, 6, 55, 23]
var prime = [];

const isPrime2 = (function(item) {
    var divided = item / 2;
      for (var i = 2; i <= divided; i++) {
       if ((item % i) == 0) { // modulous
        return false;
       } 
     }
     return true;
})
for (var index = 0; index < a.length; index++) {
  if (isPrime2(a[index])) {
      prime.push(a[index])
  }
}

console.log(prime);

//Remove Duplicate
(function(array){
    let dup = [...new Set(array)];
    console.log(dup);
   })([1,1,2,3,4])

   //Rotate Array
   const arrayRotation2 = (function(arr, numberOfShifts){
    for(let i=0;i<numberOfShifts;i++){
    arr.unshift(arr.pop());
    console.log(`step ${i+1}:`, arr);
    }
    })([1,2,3,4,5,6,7], 3)

    //Sum of all numbers
    const num = (function(arr){
        let sum = 0
        for(let i = 0 ; i<arr.length;i++){
            sum = sum + arr[i]
            
        }
        console.log(sum)
    
    })([1,2,3,4,5])

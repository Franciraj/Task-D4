//caps letter
const name1 = function(array) {
    let str = array.toLowerCase().split(" ")
  console.log(str)
  for(let i =0;i<str.length;i++){
      str[i] = str[i].charAt(0).toUpperCase()+str[i].slice(1)
      //str[i]=str[i].charAt(0).toUpperCase()+ str[i].slice(1)
      
  }
  console.log(str)
  }
  
  name1("leaRninG js iS eaSy")

  //find palindrome

  const arr1 = ['carecar', 1344, 12321, 'did', 'cannot'];
  const isPalindrome1 = function(el) {
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
  };
  const findPalindrome1 = function(arr) {
     return arr.filter(el => isPalindrome1(el));
  };
  console.log(findPalindrome1(arr1));

  //median of tow sorted array

  const median1 = function(a1, a2) {
    let x = a1.concat(a2);
    x.sort(function (a,b) {
      return a - b;
    });
    let len = x.length;
    
    return len%2 === 0 ? (x[Math.floor(len/2)-1] + x[Math.ceil(len/2)])/2 : x[Math.floor(len/2)];
  
  }
  
  let a1 = [0,2,3,5,9];
  let b1 = [1,4];
  console.log(median1(a1,b1))


  // odd numbers

  const oddValue = function(array) {
    for (let i = 0; i < array.length; i++) {
       // if(array[i]%2!=0){
            console.log(array[i])
        }
        
    }

oddValue("1 2 3 4 5 6 7 8 9 10");
//prime number
var a = [5, 9, 63, 29, 35, 6, 55, 23]
var prime = [];

const isPrime = function(item) {
    var divided = item / 2;
      for (var i = 2; i <= divided; i++) {
       if ((item % i) == 0) { // modulous
        return false;
       } 
     }
     return true;
}
for (var index = 0; index < a.length; index++) {
  if (isPrime(a[index])) {
      prime.push(a[index])
  }
}

console.log(prime);

//Remove Duplicate
let arr = ["apple", "mango", "apple", 
          "orange", "mango", "mango"]; 
  
const removeDuplicates = function(arr) { 
    return arr.filter((item, 
        index) => arr.indexOf(item) === index); 
} 
console.log(removeDuplicates(arr));

 //Rotate Array
 const nums = [1,2,3,4,5,6,7];
const k = 3;

const arrayRotation = function(arr, numberOfShifts){
for(let i=0;i<numberOfShifts;i++){
arr.unshift(arr.pop());
console.log(`step ${i+1}:`, arr);
}
}
console.log("final output:", arrayRotation(nums, k));

//Sum of all numbers
const num1 = function(arr){
    let sum = 0
    for(let i = 0 ; i<arr.length;i++){
        sum = sum + arr[i]
        
    }
    console.log(sum)

}
const val = [1,2,3,4,5]
num(val)
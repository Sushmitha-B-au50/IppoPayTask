// 1.A password is considered strong if the below conditions are all met:
// ●It has at least 6 characters and at most 20 characters.
// ●It contains at least one lowercase letter, at least one uppercase letter, and at least one digit.
// ●It does not contain three repeating characters in a row (i.e., "Baaabb0" is weak, but "Baaba0" is strong).
// Given a string password, return the minimum number of steps required to make password strong. if password is already strong, return 0.
// In one step, you can:
// ●Insert one character to password,
// ●Delete one character from password, or
// ●Replace one character of password with another character.
// Example 1:
// Input: password = "a"
// Output: 5

// Example 2:
// Input: password = "aA1"
// Output: 3

// Example 3:
// Input: password = "1337C0d3"
// Output: 0


let strongPassword = (password) =>
{
   let minSteps = 0;
   var numbers = /[0-9]/;  //regex for numbers
   var uppercase = /[A-Z]/;  //regex for uppercase 
   var lowercase = /[a-z]/; //regex for lowercase 
    if(password.length > 0 && password !=="")
    {
        if(password.length<6)
           minSteps = 6-(password.length)   // to find the ministeps needed       
        if(password.length>=6  &&  password.length<=20)
        {
			for(var i = 0; i< password.length; i++) {
				var numberOfRepeats = CheckForRepeat(i, password, password.charAt(i)); // it goes to another function to check for the repeated consective characters
				if(numberOfRepeats === 'YES')
				{
					minSteps+=1; 
				}
			}
            if(!password.match(numbers))
               minSteps +=1    //Password  should contain alteast one digit 
            if(!password.match(uppercase))
               minSteps +=1
            //    'Password  should contain alteast one uppercase letter';
            if(!password.match(lowercase))
               minSteps +=1       //    'Password  should contain alteast one lowercase letter ';
        }
        else{
            if(password.length>20)
              return 'Password  should be less than 20'
        }
      return minSteps;
    }
    else
        return 'Password cannot be empty'
}

console.log(strongPassword('Baaabb0'));

// function to check repeated chars
function CheckForRepeat(startIndex, originalString, charToCheck) {
	var repeatCount = 1;
	for(var i = startIndex+1; i<=startIndex+2; i++) {  // this loop will goes on upto next 2 indexes to check for repetation
		if(originalString.charAt(i) == charToCheck) {
			repeatCount++;
			if(repeatCount==3)
				return 'YES';
		} 
	}
}

// 2.You are given an integer array nums of 2 * n integers. You need to partition nums into two arrays of length n to minimize the absolute difference of the sums of the arrays. To partition nums, put each element of nums into one of the two arrays.
// Return the minimum possible absolute difference.
// Example 1:

// Input: nums = [3,9,7,3]
// Output: 2
// Explanation: One optimal partition is: [3,9] and [7,3].
// The absolute difference between the sums of the arrays is abs((3 + 9) - (7 + 3)) = 2.

// Example 2:
// Input: nums = [-36,36]
// Output: 72
// Explanation: One optimal partition is: [-36] and [36].
// The absolute difference between the sums of the arrays is abs((-36) - (36)) = 72.

// algorithm:

//calculating the sum of array 
//checking if there exsists a subset whose sum value is half of the total sum then the abs diff become 0 
//to check one array sum = firstParitionsum
// other array sum  = total sum - firstParitionsum
//diff  firstpartionsum - secondparitionsum 

let minDiff =(nums) =>
{
let n = nums.length;
let total = nums.reduce((sum, cur) => (sum += cur), 0);   //calculating the total array sum
let sum = Math.floor(total / 2);
let dp = Array(sum + 1).fill(false); //initialzing two d array with false values for all items
dp[0] = true;
for (let s = 1; s <= sum; s++) {
  dp[s] = nums[0] === s;
}

for (let i = 1; i < n; i++) {
  for (let s = sum; s >= 0; s--) {
    if (!dp[s] && s >= nums[i]) {
      dp[s] = dp[s - nums[i]];
    }
  }
}

let sum1 = 0;
for (let i = sum; i >= 0; i--) {
  if (dp[i] === true) {
    sum1 = i;
    break;
  }
}
let sum2 = total - sum1; // get the secondarray sum

return Math.abs(sum2 - sum1);  // secondarray sum - frstarray sum givves diff
}

let arr = [3,9,7,3]
console.log("The absolute diff between the two subset array is  "+ minDiff(arr));
	
	


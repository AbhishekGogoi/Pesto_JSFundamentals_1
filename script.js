const divideArray = (nums) => {
    let evenNums = [];
    let oddNums = [];
    for(let i=0; i<nums.length; i++){
    if(nums[i] % 2 === 0){
        evenNums.push(nums[i]);
    } else {
        oddNums.push(nums[i]);
    }
    }  
    evenNums.sort((a,b) => a-b);
    oddNums.sort((a,b) => a-b);
    
    console.log("Even Numbers: ", evenNums.length > 0 ? evenNums.join("\n") : "none");
    console.log("Odd Numbers: ", oddNums.length > 0 ? oddNums.join("\n") : "none");
}

let numbers = [4,2,6];
divideArray(numbers);

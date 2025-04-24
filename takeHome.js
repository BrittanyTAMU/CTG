//task 1: given the following numbers in an array, return the largest number: const numbers: Array< number | string | null >= [1,3,72,-100,'80', null, 2,55]

//always an array, expect pos/negative numbers, expect strings(but skip the strings)
//return the largest num in the array

function largestNumber(arr){
    //any real number will be larger than -infinity, if we use 0, then an array of all neg nums will not be considered
    let max = -Infinity

    //loop through the array
    for(let i=0; i< arr.length; i++){
        //check if the element in the array is a number
        if(arr[i] === 'number'){
            //if the current num is > than the current max(-infinity), make the max that number
            if(arr[i] > max){
                max = arr[i]
            }
        }
        return max
    }

}
console.log(largestNumber([1,3,72,-100,'80', null, 2,55]))//72

// task 2: given the following ledger, key/values store of debits and credits, return an array containing only the names of the debits... const ledger = {'127': {type: 'debit', name: 'MacBook Pro purchase'}, '128': {type: 'credit', name: 'paycheck'}, '129': {type: 'debit', name: 'Groceries'}, '130': {type: 'debit', name: 'Mortgage'}, '131': {type: 'credit', name: 'Reimbursement'}, '132': {type: 'debit', name: 'Internet Services'} }

function getDebit(ledger){
    //create an empty array
    let result = []

    //loop through the keys in the ledger
    for(let key in ledger){
        //check if the tpye property is = to debit
        if(ledger[key].type === 'debit'){
            //push the name of the transaction to the empty array
            result.push(ledger[key].name)
        }
    }
    return result
}

const ledger = {
    '127': { type: 'debit', name: 'MacBook Pro purchase' },
    '128': { type: 'credit', name: 'paycheck' },
    '129': { type: 'debit', name: 'Groceries' },
    '130': { type: 'debit', name: 'Mortgage' },
    '131': { type: 'credit', name: 'Reimbursement' },
    '132': { type: 'debit', name: 'Internet Services' }
  };

console.log(getDebitNames(ledger));

let arr : number[] = [10, 20, 30, 40, 50, 60];
let target : number = 56;

// binarySearch example

const findThePositionOfTarget = function (arr: number[], target: number):number {
    let start : number = 0;
    let end : number = arr.length - 1

    while(start <= end) {
        let mid : number = Math.floor((start + end) / 2) 
        if(arr[mid] === target) {
            return mid
        }

        if(arr[mid] < target) {
            start = mid - 1
        } else {
            start = mid - 1
        }
    }
    return -1
};

const result = findThePositionOfTarget(arr, target)
console.log("result", result)
function mergeSort(array){
    if(array.length < 2){
        return array;
    }

    const middle = Math.floor(array.length/2);
    const leftArray = array.slice(0, middle);
    const rightArray = array.slice(middle);

    return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(leftArray, rightArray){
    const sortedArray = [];
    while(leftArray.length && rightArray.length){
        if(leftArray[0] <= rightArray[0]){
            sortedArray.push(leftArray.shift())
        }else{
            sortedArray.push(rightArray.shift())
        }
    }

    return [...sortedArray, ...leftArray, ...rightArray]
}

const num = [1,4,5,3,2,6,9,8,7];

console.log(mergeSort(num));


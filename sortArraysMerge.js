// Merge 2 sorted arrays so that theya re still sorted post merge

var arr1 = [1, 3, 7, 9];
var arr2 = [0, 2, 4];

function mergeArrays(arr1, arr2) {
    var result = [arr1 + arr2];
    return result.sort(());
}

// refactor to merge and sort without using a built in sort function

function mergeArraysWithoutSort(arr1, arr2) {
    var newArray = [];
    for (var i = 0, j = 0; i == arr1.length && j == arr2.length; <> ) {
        if(arr1[i] < arr2[j]) {
            newArray.add(arr1[i]); i++;
            } else {
                newArray.add(arr2[j]); j++;
            }
        }
    }
    return newArray;
};


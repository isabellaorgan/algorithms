// Merge 2 sorted arrays into a single sorted array

var arr1 = [1, 3, 7, 9];
var arr2 = [0, 2, 4];

function mergeArrays(arr1, arr2) {
    var result = arr1.concat(arr2);
    return result.sort();
}

// refactor to merge and sort without using a built in sort function

var arr1 = [1, 3, 7, 9];
var arr2 = [0, 2, 4];

function mergeArrays(arr1, arr2) {
    var newArray = [];
    for (var i = 0; j = 0; i == arr1.length && j == arr2.length); {
        if(arr1[i] < arr2[j]) {
            newArray.add(arr1[i]); i++;
        } else {
            newArray.add(arr2[j]); j++;
        }
    }
}

//I like the first solution better, as it is shorter and easier to read and understand. In an interview, however, it was indicated
//that the first solution is somehow less efficient. I actually searched for any other solution to this that I liked as well or
//better, and was unable to find any that are concise and work.
//As a side note, the second solution - provided by the interview - did not actually work as he had written it.
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
//Not only does it contain multiple syntax errors, as is, it returns mergeArraysWithoutSort is undefined.
//Even after updating the syntax errors, I have not been able to correct it to a working version.
//I've gotten multiple errors, including illegal return statement, mergeArraysWithoutSort is not defined and newArray.add
//is not a function. I really should have challenged this solution, as I ultimately did not pass this interview.

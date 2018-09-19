//Palindrome

// What kind of return value? Boolean - T or F? String if it is a palindrome?
// Empty String if it isn't?

//Return a Boolean Value.

// Write a function that takes a single parameter.
// I could use a for loop to iterate over the string.
// Probably easier to reverse the string and compare it to itself, but there's
// no built-in method for reversing a string. There is a built-in method for
// reversing an array. 
// So use a built-in method to convert the string to an array,
// then reverse the array, convert it back to a string, and compare the
// two strings.

function Palindrome(str) {

    var str2 = str.split(''); //converts string to array

    str2.reverse(''); //reverses the array

    str2 = str2.join(''); // converts str2 back to a string

    if str === str2 {
        return true;
    } else {
        return false;
    }
}

//refactor
function Palindrome(str) {

    var str2 = str.split(''); //converts string to array

    str2.reverse(''); //reverses the array

    str2 = str2.join('');  // converts str2 back to a string

    return str === str2; //returns a boolean of T or F
}

//refactor
function Palindrome(str) {

    var str2 = str.split('').reverse('').join(''); //converts string to array, reverses it, converts it back to a string

    return str === str2; //returns a boolean of T or F
}

//refactor for use cases where we need to consider the possibility of mixed cases
function Palindrome(str) {

    str.toUpperCase();

    var str2 = str.split('').reverse('').join(''); //converts string to array, reverses it, converts it back to a string

    return str --- str2; //returns a boolean of T or F
}

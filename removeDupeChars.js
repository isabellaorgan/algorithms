// BofA interview question, via Glassdoor.

// The question asks that you remove duplicate characters. 
// Solution 1 works perfectly by finding
// characters that are not dupes (unique) and logs only those into the console.
// returns barn

function findUniqueChars(string) {

    var unique='';

    for(var i=0; i<string.length; i++) {
        if(unique.indexOf(string[i])==-1) {
            unique += string[i];
        }
    }
    return unique;
}

console.log(findUniqueChars('baraban'));


// Solution 2 works as well, although I personally feel like the need for a callback in the filter
// method is slightly less readable and easy to understand.
// returns barn

function removeDupeChars(string) {
    return string
    .split('')
        .filter(function(item, pos, self) {
          return self.indexOf(item) == pos;
        })
    .join('');
}

console.log(removeDupeChars('baraban'));

// Solution 3 may be the winner as it is the most concise, readable and easily understandable, even with the filter method
// and the callback. However, where the first two solutions remove ONLY the duplicate instance (so the second b and 2nd & 3rd a)
// this solution will remove all characters that occur more than once.
// returns rn

var str = 'baraban'.split('');
var rmDup = str.filter(function(val, i, str) {
     return str.lastIndexOf(val) === str.indexOf(val);
});
console.log(rmDup.join(''));

// Solution 4 refactors Solution 3 to only remove the duplicate instances (1 instance of b, 2 instances of a)
// returns rban

var str = 'baraban'.split('');
var rmDup = str.filter(function(val, i, str) {
     return str.lastIndexOf(val) == i;
});
console.log(rmDup.join(''));


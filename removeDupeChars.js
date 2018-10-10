// BofA interview question, via Glassdoor.

// The question asks that you remove duplicate characters. 
// Solution 1 works perfectly by finding
// characters that are not dupes (unique) and logs only those into the console.

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


// Solution works as well, although I personally feel like the need for a callback in the filter
// method is slightly less readable and easy to understand.

function removeDupeChars(string) {
    return string
    .split('')
        .filter(function(item, pos, self) {
          return self.indexOf(item) == pos;
        })
    .join('');
}

console.log(removeDupeChars('baraban'));
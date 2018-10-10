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

// BofA interview question, via Glassdoor.
// The question asks that you remove duplicate characters, this solution works perfectly by finding
// characters that are not dupes (unique) and logs only those into the console.
// Rotate a Matrix
// A matrix is a two dimensional array, say a 5 x 5 grid with rows
// and columns.
// Should we rotate it in place? Or do we need to create a new matrix? - In Place (Matrix MUST be a square matirx to do this)
// How much should we rotate it? - 90 degrees
// Which direction? Clockwise

// Approach:
// I'd like to do tis subset by subset, beginning with the outermost, and moving inward.
// Copy the first row/array into a temp var, then move the left column to where the first row was. Then move the last row to where the left column was, the right column to where the last row was, finally place the copy of the first row where the right column is. Moving inward, we will subtract 1 
// from the index to get the second row, and continu following the previous
// pattern until each subset has been roatated.
// An optimization would be to do this index by index.
// I'll write a function that takes 2 parameters - one for the matrix subsets,
// one for the index

var rotate = function(matrix, n) {

    for (var subset = 0; subset < n/2; subset++) {
        var first = subset; //this is the first row
        var last = n - subset - 1; //this is the last row, where we are taking the number of the "cells" in the array, subtracting the subset (row or column) then subtracting 1 more to get an inner array
    

        for (var i = first; i < last; i++) {
            var offset = i - first;
    


            //this says the first row into a temp variable
            var top = matrix [first] [i];

            //this rotates the left column so that it replaces the top row array
            matrix[first][i] = matrix[last-offset][first];

            //this rotates the last row to replace the left column
            matrix[last-offset][first] = matrix[last][last-offset];

            //this rotates the right column to replace the last row
            matrix[last][last-offset] = matrix[i][last];

            //rotates first row to replace right column
            matrix[i][last] = top;
        }

    }
};

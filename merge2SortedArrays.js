var numbers = [1, 5, 1, 3, 5, 5, 2];
var Main;
(function(Main) {
  function searchMostCommonNumber(arr) {
    if (arr === void 0) {
      arr = [];
    }
    var current = 0;
    var max = 0;
    var mostCommonNumber = 0;
    var i;
    for (i = 0; i < arr.length - 1; i++) {
      var current_1 = 1;
      var j = void 0;
      for (j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          current_1++;
        }
      }
      if (current_1 > max) {
        max = current_1;
        mostCommonNumber = arr[i];
      }
    }
    return mostCommonNumber;
  }
  Main.searchMostCommonNumber = searchMostCommonNumber;
})(Main || (Main = {}));
console.log('The most common number is :', Main.searchMostCommonNumber(numbers));
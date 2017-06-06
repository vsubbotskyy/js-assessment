exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce(function(acc, val){
      return acc + val;
    });
  },

  remove: function(arr, item) {
    return arr.filter(function(el){
      return el !== item;
    });
  },

  removeWithoutCopy: function(arr, item) {
    var index = 0;
    while ((index = arr.indexOf(item, index)) > -1){
      arr.splice(index, 1);
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.splice(0, 0, item);
    return arr;
  },

  curtail: function(arr) {
    arr.splice(0, 1);
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    return arr.reduce(function(acc, val){
      if (item === val){
        return acc + 1;
      }
      return acc;
    }, 0);
  },

  duplicates: function(arr) {
    var results = [];
    var currentItem;
    var arrSortedCopy = arr.slice().sort();

    for (var i = 0; i < arr.length; i++) {
      currentItem = arrSortedCopy[i];
      if (currentItem === arrSortedCopy[i + 1]) {
        if (results.indexOf(currentItem) === -1) {
          results.push(currentItem);
        }
      }
    }

    return results;
  },

  square: function(arr) {
    return arr.map(function(el){
      return el * el;
    });
  },

  findAllOccurrences: function(arr, target) {
    var occurrences = [];
    arr.forEach(function(el, index){
      if (el === target) {
        occurrences.push(index);
      }
    });
    return occurrences;
  }
};

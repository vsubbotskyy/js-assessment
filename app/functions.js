exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn(...arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return function(message) { return str + ', ' + message }
  },

  makeClosures: function(arr, fn) {
    return arr.map((item) => {
      return function() {
        var x = item;

        return fn(x);
      }
    });
  },

  partial: function(fn, str1, str2) {
    var greeting = str1,
        name = str2;
    return function(punctuation) {
      return fn(greeting, name, punctuation);
    }
  },

  useArguments: function() {
    return [].slice.call(arguments).reduce((acc, item) => {
      acc = acc + item;
      return acc;
    });
  },

  callIt: function(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    return fn.apply(this, args);
  },

  partialUsingArguments: function(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    return function(...moreArgs) {
      return fn.apply(null, args.concat(moreArgs));
    }
  },

  curryIt: function(fn) {
    return (x) => (y) => (z) => fn(x,y,z);
  }
};

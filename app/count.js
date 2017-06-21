exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  number: 0,
  count: function (start, end) {
    number = start;
    console.log(number);
    var countInterval = setInterval(function(){
        if (number < end) {
            console.log(++number);
        }
        else {
            clearInterval(countInterval);
        }
    }, 100);

    var cancelTimer = function cancelTimer() {
        clearInterval(countInterval);
    }

    return { cancel: cancelTimer };
  }
};

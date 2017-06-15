exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return Promise.resolve(value);
  },

  manipulateRemoteData: function(url) {
    return new Promise((resolve, reject) => {
        $.ajax(url).then(function(data){
            resolve(data.people.map((person) => { return person.name }).sort());
        });
    });
  }
};

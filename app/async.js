exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {

  },

  manipulateRemoteData : function(url) {
    $.get(url, function(data) {
      return data;
    })
  }
};

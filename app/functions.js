exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(this, arr);
  },

  speak : function(fn, obj) {
    return fn.apply(obj);
  },

  functionFunction : function(str) {
    return function(str2) {
      str = str + ', ' +str2;
      return str;
    }
  },

  makeClosures : function(arr, fn) {
    arr.map(function(val) {
      return function(val) {
        return fn(val);
      }
    })
  },

  partial : function(fn, str1, str2) {
    var str = str1 + ', ' + str2;
    return function() {

    }
  },

  useArguments : function() {

  },

  callIt : function(fn) {

  },

  partialUsingArguments : function(fn) {

  },

  curryIt : function(fn) {

  }
};

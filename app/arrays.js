exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
     for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        return i;
      }
     }
     return -1;
  },

  sum : function(arr) {
    return arr.reduce(function (a, b) {
      return a + b;
    })
  },

  remove : function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
      }
    }
    return arr;
  },

  removeWithoutCopy : function(arr, item) {
    for (var i = arr.length - 1; i >=0; i --) {
      if (arr[i] === item) {
        arr.splice(i, 1);
      }
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    _.each(arr2, function(item) {
      arr1.push(item);
    })
    return arr1;
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var counter = 0;
    _.each(arr, function(val) {
      if (val === item) counter++;
    })
    return counter;
  },

  duplicates : function(arr) {
    var result = [];
    var testArr = [];
    _.each(arr, function(item) {
      if (testArr.indexOf(item) === -1) {
        testArr.push(item);
      } else if (result.indexOf(item) === -1) {
        result.push(item);
      }
    })
    return result;
  },

  square : function(arr) {
    return arr.map(function(val) {
      return val*val;
    })
  },

  findAllOccurrences : function(arr, target) {
    var result = [];
    _.each(arr, function(val, ind) {
      if (val === target) {
        result.push(ind)
      }
    })
    return result;
  }
};

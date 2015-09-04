exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    
    var counting = true;
    var counter = start;

    var result = {
      cancel: function() {
        counting = false;
      }
    };

    var count = function(start, end) {

      setInterval(function(){
        if (counting) {
          counter++;
          console.log(counter);
          if (counter === end) {
            result.cancel();
          }
          return result;
        }
      }, 100)
    }

  }

  count();
};

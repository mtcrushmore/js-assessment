exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
    return fn.apply(obj);
  },

  alterObjects : function(constructor, greeting) {
    var D = function(){
      constructor.call(this);
      this.greeting = greeting;
    }
    D.prototype = Object.create(constructor.prototype);
    constructor = D;
    return constructor;
  },

  iterate : function(obj) {
    
  }
};

(function (exports) {
  var speakWord = "Hello";
  var helloSpeaker = {
    speak: function(name) {
      console.log(speakWord + " " + name);
    }
  };
  exports.helloSpeaker = helloSpeaker;
})(window);

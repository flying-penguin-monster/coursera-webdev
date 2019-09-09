(function (exports) {
  var speakWord = "Good Bye";
  var byeSpeaker = {
    speak: function(name) {
      console.log(speakWord + " " + name);
    }
  };
  exports.byeSpeaker = byeSpeaker;
})(window);

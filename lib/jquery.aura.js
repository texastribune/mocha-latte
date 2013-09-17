var cssShorthandDistances = require('./cssShorthandDistances');


// add an aura to an element. if the mouse enters this aura, trigger a callback
$.fn.aura = function(distance, callback) {
  if (!this.length || !callback) {
    return;
  }
  cssPxDistance = cssShorthandDistances(distance);
  var $helper = $('<div class="ui-aura-helper" style="box-sizing: content-box; -moz-box-sizing: content-box; -webkit-box-sizing: content-box; position: absolute; z-index: 999"/>')
    .css('outline', '2px dashed red')  // DEBUG
    .css('padding', "" + cssPxDistance)
    .appendTo(document.body)
    .on('mouseover.aura', function() {
      callback.call(undefined);  // what should 'this' be?
      $helper.remove();
    });
  // only works for one element
  var position = this.position();
  $helper
    .css({
      height: this.height(),
      left: position.left - cssPxDistance.left,
      top: position.top - cssPxDistance.top,
      width: this.width()
    });
};

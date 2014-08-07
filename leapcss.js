$(document).ready(function() {
  Leap.loop(function(frame) {
    for (var i = 0; i < frame.pointables.length && i < 2; i++) {
      var coord = getCoord(frame.pointables[i]);
      var leapPoint = Leap.vec3.create(coord.x, coord.y, coord.z); //could be any point
      var iBox = frame.interactionBox();
      var normalizedPoint = iBox.normalizePoint(leapPoint, true);

      var appX = normalizedPoint.x * window.innerWidth;
      var appY = (1 - normalizedPoint.y) * window.innerHeight;


      console.log(document.elementFromPoint(appX, appY));
    }

  });
});







(function() {
  function getCoord(pointer) {
  return {
    x: window.innerWidth / 2 + 3 * pointer.tipPosition[0],
    y: window.innerHeight - pointer.tipPosition[1],
    z: 180 + pointer.tipPosition[2],
    id: pointer.id
  };
}
  Leap.loop(function(frame) {
    for (var i = 0; i < frame.pointables.length && i < 1; i++) {
      var coord = getCoord(frame.pointables[i]);
      el = document.elementFromPoint(coord.x, coord.y)
      if (el){

      el.style.backgroundColor = "rgb(" + ~~(Math.random() * 255) + "," + ~~(Math.random() * 255) + "," +   ~~(Math.random() * 255)  +  ")";
    }
    }
  });
})();







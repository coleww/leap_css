(function() {
  function getCoord(pointer) {
    return {
      x: window.innerWidth / 2 + 3 * pointer.tipPosition[0],
      y: window.innerHeight - pointer.tipPosition[1],
      z: 180 + pointer.tipPosition[2],
      id: pointer.id
    };
  }
  function randoColor(){
    return "rgb(" + ~~(Math.random() * 255) + "," + ~~(Math.random() * 255) + "," +   ~~(Math.random() * 255)  +  ")";
  }
  Leap.loop(function(frame) {
    if(Math.random() < (1.0 / 3.0)){

      for (var i = 0; i < frame.pointables.length && i < 1; i++) {
        var coord = getCoord(frame.pointables[i]);
        el = document.elementFromPoint(coord.x, coord.y);
        if (el && el != document.body){
          el.style.backgroundColor = "rgb(" + ~~(Math.random() * 255) + "," + ~~(Math.random() * 255) + "," +   ~~(Math.random() * 255)  +  ")";
          el.style.color = randoColor();
          // // console.log(el.offsetWidth);
          // el.style.maxWidth = null;
          // el.style.maxHeight = null;
          el.style.width = el.offsetWidth + (((Math.random() * 2) - 1) * 25) + "px";
          el.style.height = el.offsetHeight+ (((Math.random() * 2) - 1) * 25) + "px";
          el.style.borderRadius = Math.random() * 25;

        }
      }
    }
  });
})();

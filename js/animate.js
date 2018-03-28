//////////////// ANIMATE + DRAW ////////////////

function draw() {
    setTimeout(function() {
      requestAnimationFrame(draw);
      if (animate == true) {

        incriment++
        dateLocation = handle.getBoundingClientRect().right

      if (dateLocation <= window.innerWidth){
          handle.style.left = segmentWidth * incriment+'px';
          progress.style.width = handle.style.left
          nowOnDate = dates[incriment]
          datePrint.innerText = nowOnDate.slice(0,-9) 
        }else{
          playPause.checked = true;
          animate = false; 
        }
      myLayer.thisMonth(nowOnDate);
    }
  }, 50 )
}
 
draw()
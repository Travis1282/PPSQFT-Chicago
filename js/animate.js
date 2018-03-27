//////////////// ANIMATE + DRAW ////////////////

function draw() {
    speed = 50; 
    setTimeout(function() {
      if (animate == true) requestAnimationFrame(draw);

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

  }, speed )
}
 
draw()

//////////////// MAINTAIN THE BROWSER WIDTH AND HEIGHT VARIBLES ON RESIZE ////////////////

window.onresize = (event) => {
      segmentWidth = (Math.round(window.innerWidth/dates.length))
      console.log(segmentWidth, "segmentWidth", innerWidth, "innerWidth", dates.length, "dates.length")
};




//////////////// DRAG HANDLE ////////////////

function dragElement(elmnt) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {

    animate = false
    playPause.checked = true;

    e = e || window.event;
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    let newMouseX = e.clientX,
        handleLeft = e.clientX,
        rightLimit = window.innerWidth - 20;
    
    if (handleLeft < 0) handleLeft = 0;
    if (handleLeft > rightLimit) handleLeft = rightLimit;

    handle.style.left = segmentWidth * incriment +'px';
    incriment = Math.round(handleLeft/segmentWidth)

    nowOnDate = dates[incriment]
    datePrint.innerText = nowOnDate.slice(0,-9) 

    myLayer.thisMonth(nowOnDate);
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
    // animate = true;

    draw();
  }
}

//////////////// ANIMATE + DRAW ////////////////

function draw() {
    speed = 50; 
    setTimeout(function() {
      if (animate == true) requestAnimationFrame(draw);
        incriment++
        dateLocation = handle.getBoundingClientRect().right
      if (dateLocation <= window.innerWidth){
        handle.style.left = segmentWidth * incriment+'px';
        nowOnDate = dates[incriment]
        datePrint.innerText = nowOnDate.slice(0,-9) 
        }else{
                  playPause.checked = true;
                  console.log("end")
        }
      myLayer.thisMonth(nowOnDate);

  }, speed )
}
 


//////////////// DATE TRACKER ////////////////


let datePrint = document.createElement('div');   
document.body.appendChild(datePrint);
datePrint.id = 'datePrint'
datePrint.innerText = "Loading...";


//////////////// PROGRESS BAR ////////////////

let fullWidthBar = document.createElement('div');   
document.body.appendChild(fullWidthBar);
fullWidthBar.id = 'fullWidthBar';


//////////////// PLAY/PAUSE BUTTON ////////////////

let playPause = document.querySelector("input[name=check]");
playPause.checked = true;
playPause.addEventListener( 'change', function() {
    if(this.checked) {  
        animate = false;
    } else if (dateLocation >= window.innerWidth-5){
        incriment = 0;
        handle.style.left = (segmentWidth * incriment);
        nowOnDate = dates[incriment];
        datePrint.innerText = nowOnDate.slice(0,-9);
        animate = false;
      }else{
        animate = true;
        draw();
    }
});

//////////////// CREATE DRAGGABLE BOX ////////////////

let handle = document.getElementById('handle');   
dragElement(document.getElementById("handle"));
segmentWidth = window.innerWidth/dates.length;

    
handleHolder = document.getElementById('handleHolder');   
handleHolder.style.bottom = 0;


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
    progress.style.width = handle.style.left
    incriment = Math.round(handleLeft/segmentWidth)

    nowOnDate = dates[incriment]
    datePrint.innerText = nowOnDate.slice(0,-9) 

    myLayer.thisMonth(nowOnDate);
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
    // animate = true;

  }
}


//////////////// PROGRESS BAR & DRAGGABLE BOX ////////////////

let progress = document.getElementById('progress'); 
handleHolder.style.width = 0;

let handle = document.getElementById('handle');   
dragElement(document.getElementById("handle"));
segmentWidth = window.innerWidth/dates.length;




//////////////// PLAY/PAUSE BUTTON ////////////////

let playPause = document.querySelector("input[name=check]");
playPause.checked = true;
playPause.addEventListener( 'change', function() {
    if(this.checked) {  
        animate = false;
    } else if (dateLocation >= window.innerWidth-5){// once finished restart at the begining 
        incriment = 0;
        handle.style.left = (segmentWidth * incriment);
        nowOnDate = dates[incriment];
        datePrint.innerText = nowOnDate.slice(0,-9);
        animate = true;
        draw();
      }else{
        animate = true;
        draw();
    }
});



//////////////// DATE TRACKER ////////////////

let datePrint = document.createElement('div');   
document.body.appendChild(datePrint);
datePrint.id = 'datePrint'
datePrint.innerText = "Loading...";

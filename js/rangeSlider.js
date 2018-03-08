////////////////// GLOBAL //////////////////
 let  dates = [],
      segmentWidth = '', 
      dateLocation = '',
      incriment = 0, 
      nowOnDate = dates[0];
;




//////////////// MAINTAIN THE BROWSER WIDTH AND HEIGHT VARIBLES ON RESIZE ////////////////

window.onresize = (event) => {
      segmentWidth = (window.innerWidth)/dates.length;
      console.log(segmentWidth)
};


//////////////////// GET ALL THE UNIQUE DATES ////////////////////

      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {

          if (xhr.readyState == XMLHttpRequest.DONE) {
              dates = JSON.parse(xhr.responseText)
                  segmentWidth = (window.innerWidth)/dates.length;//Math.round();
                  console.log(segmentWidth)

          }
      }

    xhr.open('GET', 'http://localhost:9292/dates', true);
    xhr.send(null); 


//////////////// DOM MANIPULATION ////////////////



let handle = document.getElementById('handle');   // create main window container
    handle.style.backgroundColor = '#0bc';

    handle.addEventListener('click', function() {
      // console.log('handle!!')
});

//////////////// LOOP ALL DATES ////////////////
// for (var i = dates.length - 1; i >= 0; i--) {
//   dates[i]
// }


//////////////// ANIMATE HANDLE ////////////////

console.log(myLayer)
function draw() {
    speed = 500; 
    setTimeout(function() {
      requestAnimationFrame(draw);
      incriment++
      handle.style.transform = 'translateX('+segmentWidth * incriment+'px)';
      dateLocation = handle.getBoundingClientRect().right
      
      console.log(dates[incriment+15]);
      console.log(dates[incriment])
      nowOnDate = dates[incriment].slice(0,-9) 
      // let patched = ctx.fillStyle.split(' ');
      // let splicedHsla = patched.splice(3, 1, "12321)")
      // console.log(nowOnDate, "animation")

      // console.log(dateLocation, "right", segmentWidth, 'segmentWidth', nowOnDate, 'nowOnDate')
      // plotter(nowOnDate)/
      // console.log(myLayer)
      myLayer.getter(nowOnDate);

  }, speed )
}
 
draw();

    // console.log(ctxfill)
    // ctx.fillStyle = 'hsla('+d[2]+', 100%, 50%, 0.5)';

// document.body.appendChild(handle);
// handle.style.color = '#0bc';
// handle.style.width = '100vw';
// handle.style.height = '10px';
// handle.zIndex = 99;
// handle.style.position = 'fixed';
// handle.style.overflow = 'visible';
// handle.style.left = '0';
// handle.style.bottom = '0';




// const terminal = document.createElement('div'); // create terminal window where the text lives
// terminalWindow.appendChild(terminal);
// terminal.style.fontFamily = "'Courier New', Courier, monospace";
// terminal.style.color = 'white';
// terminal.style.zIndex = '1'
// terminal.style.position = 'relative';

// let blinker = document.createElement('div'); /// create the blinker for the text input area
// terminalWindow.appendChild(blinker);
// blinker.style.backgroundColor = '#0f0';
// blinker.style.width = '10px';
// blinker.style.height = '20px';
// blinker.style.marginTop = '-20px';
// blinker.style.position = 'relative';

    

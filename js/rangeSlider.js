////////////////// GLOBAL //////////////////
 let dates = []

//////////////////// GET ALL THE UNIQUE DATES ////////////////////


      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
            console.log('onreadystatechange')

          if (xhr.readyState == XMLHttpRequest.DONE) {
              data = JSON.parse(xhr.responseText)
                  console.log('if readyState')
                  console.log(data)
          }
      }

    xhr.open('GET', 'http://localhost:9292/dates', true);
    xhr.send(null); 


//////////////// DOM MANIPULATION ////////////////

let sliderContainer = document.createElement('div');   // create main window container
document.body.appendChild(sliderContainer);
sliderContainer.style.color = '#0bc';
sliderContainer.style.width = '100vw';
sliderContainer.style.height = '10px';
sliderContainer.zIndex = 99;
sliderContainer.style.position = 'fixed';
sliderContainer.style.overflow = 'visible';
sliderContainer.style.left = '0';
sliderContainer.style.bottom = '0';




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

    

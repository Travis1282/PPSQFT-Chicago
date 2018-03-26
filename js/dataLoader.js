////////////////// GLOBAL //////////////////
 // let  dates = [],
let   segmentWidth = '', 
      dateLocation = '',
      incriment = 0, 
      nowOnDate = dates[0],
      animate = true;



//////////////////// VIEW IN CHICAGO //////////////////
const leafletMap = L.map('map').setView([41.8781, -87.6498], 12);
// -- pls change your key to keep this working for others.
L.tileLayer("https://{s}.tiles.mapbox.com/v4/mapbox.dark/{z}/{x}/{y}@2x.png?access_token=pk.eyJ1IjoiZ2xlYWZsZXQiLCJhIjoiY2lxdWxoODl0MDA0M2h4bTNlZ2I1Z3gycyJ9.vrEWCC2nwsGfAYKZ7c4HZA")
    .addTo(leafletMap);


//////////////////  PUT DATA ON MAP //////////////////


var Plotter = function() {
  // (this.getDates = function(){
  //   /////Calls api returns as json ///////////

  //             const xhr = new XMLHttpRequest();
  //             xhr.onreadystatechange = function() {

  //                 if (xhr.readyState == XMLHttpRequest.DONE) {
  //                   console.log(xhr.responseText)
  //                     dates = JSON.parse(xhr.responseText)
  //                     segmentWidth = (window.innerWidth)/dates.length;//Math.round();
  //                     console.log(xhr.responseText)
  //                    console.log(dates)


  //                 }
  //             }
  //               xhr.open('GET', '../data/dates.html', true); // Amazon hosted version
  //           // xhr.open('GET', 'http://localhost:9292/dates', true); // apicall version 
  //           xhr.send(null); 
  //       }());

        this.thisMonth = function() {  
        const that = this;  
        this.data = []
        // console.log('getting this far')
            // let o = 0;
            // middle = false
              onThisDate = allData[incriment]
               // console.log(onThisDate)

            for (let i = incriment - 15; i < incriment + 15; i++) {
                  // if (o > 0.9){middle = true}
                  // if (o < 1 && middle === false){ o = o + 0.059 } else { o = o - 0.059}
               const filtered = allData.filter(property => property.datesold == dates[i]);
                if (filtered.length != 0){
                  for (let j = 0; j < filtered.length; j++){
                    // filtered[j].datesold = Math.round( o * 100 ) / 100;
                    this.data.push(filtered[j])
                    // console.log(filtered[j].datesold)
                  }
                }
            }
          this.setData(this.data)
        }
        this.onLayerDidMount = function (){ 
            const that = this;  
            // this.allData = [];
            // // this.dataByDay = []
            //   const xhr = new XMLHttpRequest();
            //   xhr.onreadystatechange = function() {

            //       if (xhr.readyState == XMLHttpRequest.DONE) {
                      
                      // allData = JSON.parse(xhr.responseText)
                      // data.push(JSON.parse(xhr.responseText))
                      that.thisMonth(allData)
                      window.draw();
                      playPause.checked = false;
                      segmentWidth = window.innerWidth/dates.length;


                      // console.log(console.log(xhr.responseText))

              //     }
              // }
            // xhr.open('GET', '../data/heatmap.html', true);  // Amazon hosted version
            // xhr.open('GET', 'http://localhost:9292/properties/'); // api version of the data
            // xhr.send(null); 
          };    

        this.onDrawLayer = function (viewInfo){
          scale = (-viewInfo.zoom * -7) -70
         let ctx = viewInfo.canvas.getContext('2d');
          ctx.clearRect(0, 0, viewInfo.canvas.width, viewInfo.canvas.height); 
          const that = this
            for (let i = 0; i < this.data.length; i++) {
                  let d = [parseFloat(this.data[i].lat), parseFloat(this.data[i].long), parseFloat(this.data[i].ppsqft), parseFloat(this.data[i].datesold)]
                  if (viewInfo.bounds.contains([d[0], d[1]])) {
                      dot = viewInfo.layer._map.latLngToContainerPoint([d[0], d[1]], false);
                      // ctx.filter = 'blur(2px)'
                      // console.log(d[3])
                      ctx.beginPath();
                      ctx.arc(dot.x, dot.y, scale, 0, Math.PI * 2);
                      ctx.fillStyle = 'hsla('+(d[2]*.4)+', 100%, 50%, 0.5 )';
                      ctx.fill();
                      ctx.closePath();

                  } // if in bounds 
                }//for loop
             }//onDrawLayer 

          this.setData = function (data){

            this.data = data;
            this.drawLayer()
             // -- call to drawLayer
            };
} 

Plotter.prototype = new L.CanvasLayer(); // -- setup prototype 

const myLayer = new Plotter();
myLayer.addTo(leafletMap);

leafletMap.on('movestart', function (e) { 
  if (animate == true){
    playPause.checked = true;
    animate = false; 
    leafletMap.on('moveend', function (e) { 
      playPause.checked = false;
      animate = true, draw();});
  }
});




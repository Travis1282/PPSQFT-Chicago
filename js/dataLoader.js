

//////////////////// VIEW IN CHICAGO //////////////////
const leafletMap = L.map('map').setView([41.8781, -87.6298], 11);
// -- pls change your key to keep this working for others.
L.tileLayer("https://{s}.tiles.mapbox.com/v4/mapbox.dark/{z}/{x}/{y}@2x.png?access_token=pk.eyJ1IjoiZ2xlYWZsZXQiLCJhIjoiY2lxdWxoODl0MDA0M2h4bTNlZ2I1Z3gycyJ9.vrEWCC2nwsGfAYKZ7c4HZA")
    .addTo(leafletMap);


//////////////////  PUT DATA ON MAP //////////////////

myCustomCanvasDraw = function(){
        this.onLayerDidMount = function (){    
          const that = this;  
          this.data = [];
            const xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                  console.log('onreadystatechange')

                if (xhr.readyState == XMLHttpRequest.DONE) {
                   const data = JSON.parse(xhr.responseText)
                        console.log('if readyState')
                        that.setData(data)
                }
            }
          xhr.open('GET', 'http://localhost:9292/properties/2016-01', true);
          xhr.send(null); 
        };    
        this.onLayerWillUnmount  = function(map){
           // -- custom cleanup    
           console.log(map, ' is this called ')
        };    
        this.onDrawLayer = function (viewInfo){

          const ctx = viewInfo.canvas.getContext('2d');
          console.log(viewInfo.canvas.width, viewInfo.canvas.height, ctx)
          ctx.clearRect(0, 0, viewInfo.canvas.width, viewInfo.canvas.height); 
          const that = this
            for (let i = 0; i < this.data.length; i++) {
                // console.log(data)
                  let d = [parseFloat(this.data[i].lat), parseFloat(this.data[i].long), parseFloat(this.data[i].ppsqft, parseFloat(this.data[i].datesold))]
                    // console.log(d)
                  if (viewInfo.bounds.contains([d[0], d[1]])) {
                      dot = viewInfo.layer._map.latLngToContainerPoint([d[0], d[1]], false);
                      ctx.beginPath();
                      ctx.arc(dot.x, dot.y, 3, 0, Math.PI * 2);
                      ctx.fillStyle = 'hsla('+d[2]+', 100%, 50%, 0.5)';
                      ctx.fill();
                      ctx.closePath();
                  } // if in bounds 
                }//for loop

          this.setData = function (data){
            this.data = data;
            this.drawLayer()
             // -- call to drawLayer
            };
        }//onDrawLayer
}//myCustomCanvisDraw


myCustomCanvasDraw.prototype = new L.CanvasLayer(); // -- setup prototype 

var myLayer = new myCustomCanvasDraw();
myLayer.addTo(leafletMap);




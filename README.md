# PPSQFT Chicago

## What is it?
This is a data visitation of sold properties in Chicago that animates over time. A dot appears on the map representing a sold property (multi-units and single families, not condos at the moment.) and assigned a color that represents the calculated price per square foot for the property. This way you can see home values change over time spot trends as they emerge. 

## What's it made of?
I used the Leaflet.js library with an integrated canvas layer via a gLayers.Leaflet component and the background tiles are through mapbox. The backend of the project (not contained in this repo) was build on Sinatra in Ruby with a PSQL database. 

## What's the plan?
Eventually I want to be able to predict value trends and visualize them on the map. This project was the first step in that direction. The majority of that work will be on the back end in data analysis and machine learning and then plot points on a grid as opposed to their lat long coordinates. 

## Future goals
Currently the site is not mobile friendly and while adjusting the element sizes for smaller viewing windows is simple, the larger challenge is getting the dragg working on mobile. 
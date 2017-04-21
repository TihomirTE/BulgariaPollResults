import { results } from "./../dependencies/results.js"

let resultData = results();
console.log(resultData);

function createMap() {
    
    let colors = ["#E96D63", "#7FCA9F", "#F4BA70", "#85C1F5", "#4A789C", "#13A1CB", "#728CB0", "#C296B6", "#66ff99", "#ff99ff", "#ff6699", "#53e9d0"];

    let $divContainer = $("#tab-content");

    $divContainer.width(650);
    $divContainer.height(500);

    $divContainer.kendoMap({
        controls: {
            attribution: false,
            navigator: false,
            zoom: false
        },
        center: [42.578129, 25.091893],
        zoom: 7,
        zoomable: false,
        pannable: false,
        layerDefaults: {
                shape: {
                    style: {
                        stroke: {
                            color: "white",
                            width: 1,
                            dashType: "solid",
                            opacity: 1
                        }
                    }
                }
            },
        layers: [{
            type: "shape",
            dataSource: {
                type: "geojson",
                transport: {
                    read: "./dependencies/bulgaria_map.json"
                }
            }
        }],
        shapeCreated: function(e) {
            let provNum = e.shape.dataItem.id;
            
            if (provNum) {
                e.shape.fill(colors[provNum % colors.length]);
                
            }
        },
        shapeMouseEnter: function(e) {
        
                e.shape.stroke("black");
                
            },
        shapeMouseLeave: function(e) {
                
                e.shape.stroke("white");
            }
        
    });
}

export { createMap };
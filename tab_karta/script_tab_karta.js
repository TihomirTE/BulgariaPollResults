import { results } from "./../dependencies/results.js";
import { getPartyColor } from "./PartyColorPicker.js";
import { giveTemlpate } from "./buble.js"
import Handlebars from "./../node_modules/handlebars/dist/handlebars.min.js"

let resultData = results();

let $divHolder = $("#tab-holder");

function createMap() {

    let $divContainer = $("#tab-content");

    $divContainer.width(700);
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
            
            let winnerColor = resultData.ResultsByRegion[provNum].results[1].number;

            if (provNum) {
                e.shape.fill(getPartyColor(winnerColor));
                
            }
        },
        shapeMouseEnter: function(e) {
        
                e.shape.stroke("black");

                let popupTemplateString = giveTemlpate();
                let handelbarsData = resultData.ResultsByRegion[e.shape.dataItem.id]

                let popupTemplate = Handlebars.compile(popupTemplateString) 

                let popupHTML = popupTemplate(handelbarsData)

                //Popup opener
                var oe = e.originalEvent;
                var x = oe.pageX || oe.clientX;
                var y = oe.pageY || oe.clientY;

                var name = e.shape.dataItem.name_bg;
                popup.element.html(popupHTML);
                popup.open(x, y);
                //End popup opener
                
            },
        shapeMouseLeave: function(e) {
                
                e.shape.stroke("white");

                //Popup closer 
                if (!$(e.originalEvent.relatedTarget).is(".k-popup, .k-animation-container")) {
                    popup.close();
                    popup.element.kendoStop(true, true);
                }
                //Popup closer end
            }        
    });

        //Define popup
        var popup = $("<div>Foo</div>")
          .appendTo(document.body)
          .kendoPopup()
          .data("kendoPopup");
}

export { createMap };
var colors = ["#E96D63", "#7FCA9F", "#F4BA70", "#85C1F5", "#4A789C", "#13A1CB", "#728CB0", "#C296B6"];

$("#map").kendoMap({
    center: [42.578129, 25.091893],
    zoom: 8,
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
        console.log(e.shape.dataItem.provnum_ne);
        var provNum = e.shape.dataItem.provnum_ne;
        if (provNum) {
            e.shape.fill(colors[provNum % colors.length]);
        }
    }
    
});
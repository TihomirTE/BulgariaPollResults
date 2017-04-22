  function pollResults() {
      $("#chart").kendoChart({
          title: {
              position: "top",
              text: "Резултати от парламентарни избори 2017 г."
          },
          legend: {
              visible: false
          },
          chartArea: {
              background: ""
          },
          seriesDefaults: {
              labels: {
                  visible: true,
                  background: "transparent",
                  template: "#= category #: \n #= value#%"
              }
          },
          series: [{
              type: "pie",
              startAngle: 150,
              data: [{
                  category: "ПП Герб",
                  value: 32.65,
                  color: "#0000FF"
              }, {
                  category: "БСП за България",
                  value: 27.20,
                  color: "#FF0000"
              }, {
                  category: "Обединени Патриоти",
                  value: 9.07,
                  color: "#FFD800"
              }, {
                  category: "ДПС",
                  value: 8.99,
                  color: "#B200FF"
              }, {
                  category: "Воля",
                  value: 4.15,
                  color: "#00FFFF"
              }, {
                  category: "Реформаторски блок",
                  value: 3.06,
                  color: "#4800FF"
              }, {
                  category: "Не подкрепям никого",
                  value: 2.50,
                  color: "#FFFFFF"
              }]
          }],
          tooltip: {
              visible: true,
              format: "{0}%"
          }
      });
  }

  $(document).ready(pollResults);
  $(document).bind("kendo:skinChange", pollResults);
  (function($) {

      let sammyApp = Sammy("#tab-content", function() {

          this.get("#/results", function() {
              console.log("results");
              $.ajax({
                  // url: "./script_tab_rezultati.js",
                  //type: "GET",
                  success: function() {

                      let results = [{
                          category: "ПП Герб",
                          value: 32.65,
                          color: "#0000FF"
                      }, {
                          category: "Не подкрепям никого",
                          value: 2.50,
                          color: "#FFFFFF"
                      }, {
                          category: "БСП за България",
                          value: 27.20,
                          color: "#FF0000"
                      }, {
                          category: "Да България",
                          value: 2.88,
                          color: "#4C9F00"
                      }, {
                          category: "Нова Република",
                          value: 2.48,
                          color: "#808080"
                      }, {
                          category: "Обединени Патриоти",
                          value: 9.07,
                          color: "#ffd600"
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
                          category: "Дост",
                          value: 2.86,
                          color: "#FF00DC"
                      }];



                      function pollResults() {
                          $("#tab-content").kendoChart({
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
                                  data: results
                              }],
                              tooltip: {
                                  visible: true,
                                  format: "{0}%"
                              }
                          });
                      }

                      $(document).ready(pollResults);
                      $(document).bind("kendo:skinChange", pollResults);
                  }
              });
          });
      });

      $(function() {
          sammyApp.run("#/");
      });

  })(jQuery);
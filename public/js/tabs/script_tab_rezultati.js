  import { getPartyColor } from "../../dependencies/PartyColorPicker.js";
  import { results } from "../../dependencies/results.js";

  function generatorData() {
      const numberOfParties = 21;
      let resultsData = results();
      let parties = [];

      for (let i = 1; i <= numberOfParties; i += 1) {
          if (resultsData.PartiesResults[i].result >= 2) {
              let data = {};
              data.category = resultsData.PartiesResults[i].name;
              data.value = resultsData.PartiesResults[i].result;
              data.color = getPartyColor(i);

              parties.push(data);
          }
      }
      return parties;
  }

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
              data: generatorData()
          }],
          tooltip: {
              visible: true,
              format: "{0}%"
          }
      });
  }

  export { pollResults };
  export { generatorData };
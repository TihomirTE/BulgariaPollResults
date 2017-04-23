function giveTemlpate() {
   
   return `<div style="width: 250px; height: 200px; border: 2px solid black">
    <p>{{name_bg}}</p>
    <p><strong>{{results.1.name}}</strong> : {{results.1.result}}%</p>
    <p><strong>{{results.2.name}}</strong> : {{results.2.result}}%</p>
    <p><strong>{{results.3.name}}</strong> : {{results.3.result}}%</p>
    <p><strong>{{results.4.name}}</strong> : {{results.4.result}}%</p>
    <p><strong>{{results.5.name}}</strong> : {{results.5.result}}%</p>
</div>`

}

export { giveTemlpate }
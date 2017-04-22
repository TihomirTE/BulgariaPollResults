function giveTemlpate() {
   
   return `<div style="width: 200px; height: 200px; border: 2px solid black">
    <p>{{name_bg}}</p>
    <p>{{results.1.name}} : {{results.1.result}}%</p>
    <p>{{results.2.name}} : {{results.2.result}}%</p>
    <p>{{results.3.name}} : {{results.3.result}}%</p>
    <p>{{results.4.name}} : {{results.4.result}}%</p>
    <p>{{results.5.name}} : {{results.5.result}}%</p>
</div>`

}

export { giveTemlpate }
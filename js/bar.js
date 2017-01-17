function draw_bar(data,lugar,color)
{
	"use strict";

  var black_white=[
                  "url('#up-hatch')",
                  "url('#vertical-hatch')",
                  "url('#grid-hatch')",
                  "url('#horizontal-hatch')",
                  "url('#down-hatch')",
                  "url('#up-hatch-complete')",
                  "url('#down-hatch-complete')",
                  "url('#circle')",
                  "url('#square')",
                  "url('#diamond')",
                  "url('#circle-empty')",
                  "url('#square-empty')",
                  "url('#diamond-empty')",
                  "url('#white')",
                  "url('#oval')",
                  "url('#circle-invert')",
                  "url('#triangle')",
                  "url('#triangle-empty')"
                ];

  var width = 500 ,
    height = 275 ,
    width_grafica = 440 ,
    height_grafica = 165;
  
	var svg = d3.select(lugar)
    .append("svg")
      .attr("width", width )
      .attr("height", height);
      
      var myChart = new dimple.chart(svg, data);
      myChart.setBounds(60, 30, width_grafica, height_grafica);
      var x = myChart.addCategoryAxis("x", "emotion");

      x.addOrderRule("emotion");
      var y = myChart.addMeasureAxis("y", "value");
      var bars = myChart.addSeries("emotion", dimple.plot.bar);

      bars.getTooltipText = function (e) {
          return [
              "Custom x-axis: " + e.x ,
              "Custom y-axis: " + e.y 
          ];
      };
      
      data.forEach(function(elemento,id){
        myChart.assignColor(elemento.emotion,black_white[id]);
      });
      

      myChart.draw();
      x.titleShape.text("x-axis");  
  	  y.titleShape.text("y-axis"); 

      var titulo = svg.append("g");

      titulo
        .append('text')
        .attr('x',55)
        .attr('y', 14)
        .text(data.entity)
        .style("font-size", 12);

}

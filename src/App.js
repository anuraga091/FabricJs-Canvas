import { fabric } from "fabric";
import './App.css';
import { useState } from "react";


function App() {
    var canvas = new fabric.Canvas('canvas');
    canvas.add(new fabric.Rect({ fill: '#f55', top: 100, left: 100, height: 50, width: 50 }));

    canvas.selectionColor = 'rgba(0,255,0,0.3)';
    canvas.selectionBorderColor = 'red';
    canvas.selectionLineWidth = 5;

  
  const [txt, setTxt] = useState("False");
  const [xAxis, setXAxis] = useState(0);
  const [yAxis, setYAxis] = useState(0);

  canvas.set({
    centeredScaling : true,
    centeredRotation: true

    
  })
  
  canvas.on('mouse:down', function(e) {
    console.log(e);
    setTxt(<p> True </p>);



    
  });
  canvas.on('mouse:out', function(e) {
  setTxt(<p> False </p>);




  });

  canvas.on('mouse:over', function(e) {
    setTxt(<p> True </p>);



  });

  canvas.on('mouse:move', function(e){
    setXAxis(e.target.left - 100);
    setYAxis(e.target.top - 100)
  

})
  


    return (
    <div class="container" style={{display: 'flex'}}>
    <div>
        <p> Welcome to Fabric Canvas, This work is made by Anurag</p>
        <p>Shape Clicked/Touched: <span id="clicked">{txt} </span></p>  
        <p>X- axis position :<span id="xaxis"> {xAxis} </span></p>
        <p>Y- axis position:  <span id="yaxis"> {yAxis} </span> </p>
    </div>
    <canvas id="canvas"  width="1000" height="1000" ></canvas>
    </div>
  );
}
  
export default App;

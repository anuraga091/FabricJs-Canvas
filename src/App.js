import { fabric } from "fabric";
import './App.css';
import { useState } from "react";


function App() {
    var canvas = new fabric.Canvas('canvas');
    canvas.add( new fabric.Rect({
    left: 100,
    top: 200,
    fill: 'red',
    width: 50,
    height: 50,
  }));

  canvas.item(0).set({
    centeredScaling : true,
    centeredRotation: true
  })
  const [txt, setTxt] = useState("False");
  const [xAxis, setXAxis] = useState(0);
  const [yAxis, setYAxis] = useState(0);
  
  canvas.on('mouse:down', function(e) {
  console.log(e);
  setTxt(<p> True </p>);
  canvas.item(0).transparentCorners= true
  console.log(e.target.top, e.target.left)

});
canvas.on('mouse:out', function(e) {
  setTxt(<p>False</p>);

});

canvas.on('mouse:over', function(e) {
  setTxt(<p>True</p>);
});

canvas.on('mouse:move', function(e){
  setXAxis(e.target.left);
  setYAxis(e.target.top)
})


 // make object unselectable

    return (
    <>
      <p> Welcome to Fabric Canvas, This work is made by Anurag</p>
      <p>Shape Clicked: {txt}</p>
      <div>
        <span>X- axis position : {xAxis} </span>
        <span>Y- axis position: {yAxis} </span>
      </div>
      <canvas id="canvas" ></canvas>
    
    </>
  );
}
  
export default App;

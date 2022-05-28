import '../App.css';
import { useEffect, useState } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import Slider from '@mui/material/Slider';
import axios from 'axios';

const Draw = () => {

    
  // const [isPainting, setPainting] = useState(false);
  // const [brushSize, setBrushSize] = useState(5);
  // const [startCoordinates, setStartCoordinates] = useState({ x, y });
    // const [drawingOptions, setDrawingOptions] = useState({ brushSize });




useEffect(() => {
    const canvas = document.getElementById('drawing-board');
    const toolbar = document.getElementById('toolbar');
    const ctx = canvas.getContext('2d');
    
    const canvasOffsetX = canvas.offsetLeft;
    const canvasOffsetY = canvas.offsetTop;
    
    canvas.width = window.innerWidth - canvasOffsetX;
    canvas.height = window.innerHeight - canvasOffsetY;
    
    let isPainting = false;
    let lineWidth = 4;
    let startX;
    let startY;
    toolbar.addEventListener('click', e => {
        if (e.target.id === 'clear') {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    });
    
    toolbar.addEventListener('change', e => {
        if(e.target.id === 'stroke') {
            ctx.strokeStyle = e.target.value;
        }
    
        if(e.target.id === 'lineWidth') {
            lineWidth = e.target.value;
        }
        
    });
    
    const draw = (e) => {
        if(!isPainting) {
            return;
        }
    
        ctx.lineWidth = 4;
        ctx.lineCap = 'round';
    
        ctx.lineTo(e.clientX - canvasOffsetX, e.clientY);
        ctx.stroke();
    }
    
    canvas.addEventListener('mousedown', (e) => {
    
      // setStartCoordinates({ x: e.clientX, y: e.clientY });
      // setPainting(true)
        isPainting = true;
        startX = e.clientX;
        startY = e.clientY;
    });
    
    canvas.addEventListener('mouseup', e => {
        // setPainting(false)
        isPainting = false;
        ctx.stroke();
        ctx.beginPath();
    });
    
    canvas.addEventListener('mousemove', draw);  

  


}, [])



const save = async () => {

 
        var canvas = document.getElementById("drawing-board");
        var context = canvas.getContext("2d");

        context.fillRect(50, 50, 100, 100);
        // no argument defaults to image/png; image/jpeg, etc also work on some
        // implementations -- image/png is the only one that must be supported per spec.
        window.location = canvas.toDataURL("image/png");
        const img    = canvas.toDataURL('image/png')

        var canvasElement = document.getElementById('drawing-board');

        var MIME_TYPE = "image/png";
    
        var imgURL = canvasElement.toDataURL(MIME_TYPE);
        console.log(imgURL)
        var dlLink = document.createElement('a');
        dlLink.download = 'test';
        dlLink.href = imgURL;
        dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':');
    
        document.body.appendChild(dlLink);
        dlLink.click();
        document.body.removeChild(dlLink);






// drawImage(image, dx, dy)
}


//   return (
//     <div className="App">
//     <section class="container">
 
//         <div id="toolbar">
//             <h1>Draw.</h1>
//             <label for="stroke">Stroke</label>
//             <input id="stroke" name='stroke' type="color" />
//             <label for="lineWidth">Line Width</label>
//             <input id="lineWidth" name='lineWidth' type="number" value="4" />
//             <button id="clear">Clear</button>
//         </div>
//         <div class="drawing-board">
//             <canvas id="drawing-board"></canvas>
//         </div>
//     </section>
//     </div>
//   );
  return (
    <div className="App">
        <Grid container>
 
        <div style={{ height: 'toolbarHeight' }} id="toolbar">
            <div style={{ width: 200}} >
        <Typography id="input-slider" gutterBottom>
        Brush size
      </Typography>
        <Slider defaultValue={30} value={10} aria-label="Disabled slider" />
        </div>
        <div style={{ width: 200, marginLeft: 20}} >
        <Typography id="input-slider" gutterBottom>
        Color
      </Typography>
    <Button onClick={save} >SAVE</Button>

        <input id="stroke" name='stroke' type="color" />
        </div>
        </div>
        <div class="drawing-board">
            <canvas id="drawing-board"></canvas>
        </div>
    </Grid>
    </div>
  );
}

export default Draw;

import { useEffect } from "react"
import axios from 'axios';
import '../App.css'
const Draw2 = ({ imageUrl }) => {
    console.log(imageUrl)


    useEffect(()=> {
        let canvas = document.getElementById("canvas")
        canvas.height = window.innerHeight
        canvas.width = window.innerWidth
        let ctx = canvas.getContext("2d")
        ctx.lineWidth = 5
        
        let prevX = null
        let prevY = null
        
        let draw = false
        
        let clrs = document.querySelectorAll(".clr")
        clrs = Array.from(clrs)
        clrs.forEach(clr => {
            clr.addEventListener("click", () => {
                ctx.strokeStyle = clr.dataset.clr
            })
        })
        



        let clearBtn = document.querySelector(".clear")
        clearBtn.addEventListener("click", () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
        })
        
        let saveBtn = document.querySelector(".save")
        saveBtn.addEventListener("click", async () => {
     
            



            var imgUrl = canvas.toDataURL();
        
  
          
            const result = await axios.post('http://localhost:8080/api/drawings', { imgUrl: imgUrl, creator: 'brandon counts'})

       
            // ctx.clearRect(0, 0, canvas.width, canvas.height)

            
            // return result.data
        })
        
        window.addEventListener("mousedown", (e) => draw = true)
        window.addEventListener("mouseup", (e) => draw = false)
        
        window.addEventListener("mousemove", function(e){
            if(prevX == null || prevY == null || !draw){
                prevX = e.clientX
                prevY = e.clientY
                return
            }
        
            let mouseX = e.clientX
            let mouseY = e.clientY
            ctx.beginPath()
            ctx.moveTo(prevX, prevY)
            ctx.lineTo(mouseX, mouseY)
            ctx.stroke()
        
            prevX = e.clientX
            prevY = e.clientY
        })

        if(imageUrl) {


            var img= new Image();
            img.onload=start;
            img.src=imageUrl;
            function start(){
                ctx.drawImage(img,0,0);
            }
};
    }, [])
  

return (
    <body class="overflow-hidden">
    <canvas id="canvas"></canvas>
    <div class="nav">
        <div class="clr" data-clr="#000"></div>
        <div class="clr" data-clr="#EF626C"></div>
        <div class="clr" data-clr="#fdec03"></div>
        <div class="clr" data-clr="#24d102"></div>
        <div class="clr" data-clr="#fff"></div>
        <button class="clear">clear</button>
        <button class="save">save</button>
    </div>
    <script src="main.js"></script>
</body>
)
}

export default Draw2
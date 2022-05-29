import { useOnDraw } from "../hooks";

const Canvas = ({ width, height, strokeColor, strokeWidth, brushType }) => {
  const { setCanvasRef, onCanvasMouseDown } = useOnDraw(onDraw);

  function onDraw(ctx, point, prevPoint) {
    drawLine(prevPoint, point, ctx, strokeColor, strokeWidth, brushType);
  }

  function drawLine(start, end, ctx, color, width, lineCap) {
    console.log(lineCap);
    start = start ?? end;
    ctx.beginPath();
    if (lineCap === "dotted") ctx.setLineDash([5, 15]);
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();
    ctx.lineCap = lineCap;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(start.x, start.y, 2, 0, 2 * Math.PI);
    ctx.fill();
  }

  return (
    <canvas
      id="drawing-canvas"
      width={width}
      height={height}
      onMouseDown={onCanvasMouseDown}
      style={canvasStyle}
      ref={setCanvasRef}
    />
  );
};

export default Canvas;

const canvasStyle = {
  borderRadius: "0px 0px 12px 12px ",
  backgroundColor: "white",
};

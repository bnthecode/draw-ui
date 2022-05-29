export const debounce = (func, totalTime = 100) => {
  let timer;
  return (event) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(func, totalTime, event);
  };
};

export const getCanvasProps = () => {
  const canvas = document.getElementById("drawing-canvas");
  const ctx = checkRetinaDisplay()
    ? canvas.getContext("2d").scale(2, 2)
    : canvas.getContext("2d");
  return { ctx, canvas };
};

export const checkRetinaDisplay = () => {
  if (window.matchMedia) {
    var mq = window.matchMedia(
      "only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)"
    );
    return (mq && mq.matches) || window.devicePixelRatio > 1;
  }
};

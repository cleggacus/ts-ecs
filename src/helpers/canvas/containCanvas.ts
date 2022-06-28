const containCanvas = (canvas: HTMLCanvasElement) => {
  const parent = canvas.parentElement;

  if(!parent)
    throw `Couldn't find parent element`;

  const resize = () => {
    const parentRatio = parent.clientWidth / parent.clientHeight;
    const canvasRatio = canvas.width / canvas.height;

    if(parentRatio > canvasRatio) {
      canvas.style.width = ``;
      canvas.style.height = `100%`;
    } else {
      canvas.style.height = ``;
      canvas.style.width = `100%`;
    }
  }

  window.addEventListener("resize", resize);
  window.addEventListener("load", resize);
  resize();
}

export default containCanvas;
import getCanvas from "./getCanvas";

const getCanvasContext = (query: string) => {
  const canvas = getCanvas(query);

  const ctx = canvas.getContext("2d");

  if(!ctx)
    throw `Web browser does not surport canvas context.`;

  return ctx;
}

export default getCanvasContext;

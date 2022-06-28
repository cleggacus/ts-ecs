const getCanvas = (query: string) => {
  const canvas = document.querySelector<HTMLCanvasElement>(query);

  if(!canvas)
    throw `Couldn't find canvas with query "${query}".`

  return canvas;
}

export default getCanvas;

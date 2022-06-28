import World from "./World";

const ctx: Worker = self as any;

let world: World | undefined = undefined;

const update = () => {
  for(let i = 0; i < 100; i++)
    world?.createThing();

  world?.update();
  requestAnimationFrame(update);
}

ctx.onmessage = event => {
  if(event.data.req == "initialize") {
    const canvas = event.data.canvas;
    const ctx2D = canvas.getContext("2d");
    world = new World(ctx2D);

    ctx.postMessage({
      req: "initialized"
    })
  } else if (event.data.req == "update") {
    update();
  }
};
import { containCanvas, getCanvas, getCanvasContext } from "./helpers/canvas";
import Worker from "worker-loader!./cum.worker";
import World from "./World";

const ctx = getCanvasContext("#canvas");
containCanvas(ctx.canvas);
ctx.canvas.width = 1920;
ctx.canvas.height = 1080;

const world = new World(ctx);

for(let i = 0; i < 10; i++) {
  world.createThing();
}

const update = () => {
  world.update()
  requestAnimationFrame(update);
}

update();

// const worker = new Worker();

// const offscreen = canvas.transferControlToOffscreen();

// worker.postMessage({
//   req: "initialize",
//   canvas: offscreen
// }, [offscreen]);

// worker.onmessage = event => {
//   if(event.data.req == "initialized") {
//     worker.postMessage({
//       req: "update"
//     });
//   }
// }

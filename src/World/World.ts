import { Mass, Mesh, Transform, Velocity } from "./Components";
import { Renderer } from "./Systems";
import Physics from "./Systems/Physics";
import TCS from "./ThingComponentSystem";

class World {
  private tcs: TCS;

  public constructor(ctx: CanvasRenderingContext2D) {

    this.tcs = new TCS([
      new Renderer(ctx),
      new Physics()
    ]);
  }

  public createThing() {
    const thing = this.tcs.createThing();

    const transform = new Transform();
    transform.x = Math.random() * 1920;
    transform.y = Math.random() * 1080;
    const r = Math.random() * 10 + 20;

    thing.addComponent(transform);

    thing.addComponent(
      new Mesh({
        type: "Circle",
        radius: r
      })
    );

    thing.addComponent(new Mass(1));
    // thing.addComponent(new Velocity((Math.random()-0.5)*100, (Math.random()-0.5)*100));
    thing.addComponent(new Velocity(0, 0));
  }

  public update() {
    console.log("update")
    this.tcs.update();
  }
};

export default World;
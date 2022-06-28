import { transform } from "typescript";
import { Mass, Transform, Velocity } from "../Components";
import { System } from "../ThingComponentSystem";

class Physics extends System {
  private time = 0;

  public constructor() {
    super();
  }

  protected neededComponents: Function[] = [
    Mass,
    Transform,
    Velocity
  ];

  public update(): void {
    if(this.time == 0) {
      this.time = Date.now();
      return;
    }

    const time = Date.now();

    const delta = (time - this.time) / 1000;
    this.time = time;

    for(const thing of this.things) {
      const transform = thing.getComponent(Transform) as Transform;
      const mass = thing.getComponent(Mass) as Mass;
      const vel = thing.getComponent(Velocity) as Velocity;

      let fx = 0;
      let fy = 0;

      for(const thing2 of this.things) {
        const transform2 = thing2.getComponent(Transform) as Transform;
        const mass2 = thing2.getComponent(Mass) as Mass;

        if(thing != thing2) {
          const G = 6 * Math.pow(10, 5);
          const xDif = transform2.x - transform.x;
          const yDif = transform2.y - transform.y;
          let r2 = Math.pow(xDif, 2) + Math.pow(yDif, 2);
          let f = ((G * mass.mass * mass2.mass) / (r2));

          fy += f * yDif/Math.abs(yDif+xDif)
          fx += f * xDif/Math.abs(yDif+xDif)
        }
      }

      vel.x = (delta * fx/mass.mass) + vel.x;
      vel.y = (delta * fy/mass.mass) + vel.y;
      const velRes = Math.sqrt(Math.pow(vel.x, 2) + Math.pow(vel.y, 2));
      if(velRes > 500) {
        vel.y = 500*(vel.y/velRes);
        vel.x = 500*(vel.x/velRes);
      }
    }


    let i = 0;
    for(const thing of this.things){
      const transform = thing.getComponent(Transform) as Transform;
      const vel = thing.getComponent(Velocity) as Velocity;


      transform.x += vel.x * delta;
      transform.y += vel.y * delta;
      i++;
    }
  }
}

export default Physics;


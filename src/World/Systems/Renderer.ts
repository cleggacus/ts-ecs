import { Mesh, Transform } from "../Components";
import { System } from "../ThingComponentSystem";

class Renderer extends System {
  private resolution = {
    width: 1920,
    height: 1080
  };

  private ctx: CanvasRenderingContext2D;

  public constructor(ctx: CanvasRenderingContext2D) {
    super();

    this.ctx = ctx;
  }

  protected neededComponents: Function[] = [
    Mesh,
    Transform
  ];

  public update(): void {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

    for(const thing of this.things) {
      const mesh = thing.getComponent(Mesh) as Mesh;
      const transform = thing.getComponent(Transform) as Transform;

      this.ctx.fillStyle = "#ffffff";

      switch(mesh.meshData.type) {
        case "Circle":
          this.ctx.beginPath();
          this.ctx.arc(transform.x, transform.y, mesh.meshData.radius, 0, 2 * Math.PI);
          this.ctx.fill();
          this.ctx.closePath();
          break;
        case "Rect":
          this.ctx.beginPath();
          this.ctx.rect(transform.x, transform.y, mesh.meshData.width, mesh.meshData.height);
          this.ctx.fill();
          this.ctx.closePath();
          break;
      }
    }
  }
}

export default Renderer;

import Component from "./Component";
import TCS from "./TCS";

class Thing {
  private tcs: TCS;
  private components = new Map<Function, Component>();

  public constructor(tcs: TCS) {
    this.tcs = tcs;
  }

  public addComponent<T extends Component>(component: T) {
    this.components.set(component.constructor, component);
    this.tcs.addToValidSystems(this);
  }

  public removeComponent(componentClass: Function) {
    this.components.delete(componentClass);
    this.tcs.removeFromValidSystems(this);
  }

  public hasComponent(componentClass: Function) {
    return this.components.has(componentClass);
  }

  public getComponent<T extends Component>(componentClass: Function) {
    return this.components.get(componentClass);
  }
}

export default Thing;
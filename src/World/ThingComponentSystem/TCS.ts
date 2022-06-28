import Component from "./Component";
import System from "./System";
import Thing from "./Thing";

class TCS {
  private systems: System[];
  private things = new Set<Thing>();
  private deleteList: Thing[] = [];

  public constructor(systems: System[]) {
    this.systems = systems;
  }

  public update() {
    for(const system of this.systems) {
      system.update();
    }

    this.processDeleteList();
  }

  public createThing() {
    const thing = new Thing(this);
    this.things.add(thing);
    return thing;
  }

  public deleteThing(thing: Thing) {
    this.deleteList.push(thing);
  }

  private processDeleteList() {
    for(const thing of this.deleteList) {
      for(const system of this.systems)
        system.removeThing(thing);

      this.things.delete(thing);
    }

    this.deleteList = [];
  }

  public addToValidSystems(thing: Thing) {
    for(const system of this.systems)
      system.addThingIfValid(thing);
  }

  public removeFromValidSystems(thing: Thing) {
    for(const system of this.systems)
      system.removeThingIfValid(thing);
  }
}

export default TCS;

import Thing from "./Thing";

abstract class System {
  protected things = new Set<Thing>();
  protected abstract neededComponents: Function[];

  public abstract update(): void;

  public addThingIfValid(thing: Thing) {
    for(const neededComponent of this.neededComponents)
      if(!thing.hasComponent(neededComponent)) return;

    this.things.add(thing);
  }

  public removeThingIfValid(thing: Thing) {
    for(const neededComponent of this.neededComponents)
      if(thing.hasComponent(neededComponent)) return;

    this.things.delete(thing);
   }

  public removeThing(thing: Thing) {
    this.things.delete(thing);
  }
};

export default System;

import Thing from "./Thing";

abstract class Component {};

type ComponentClass<T extends Component> = new (...args: any[]) => T

export default Component;

export {
  ComponentClass
};

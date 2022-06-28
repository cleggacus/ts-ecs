import { Component } from "../ThingComponentSystem";

class Velocity extends Component {
  constructor(public x: number, public y: number) {
    super();
  }
}

export default Velocity;



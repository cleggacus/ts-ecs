import { Component } from "../ThingComponentSystem";

class Transform extends Component {
  public x: number = 0;
  public y: number = 0;

  constructor() {
    super();
  }
}

export default Transform;


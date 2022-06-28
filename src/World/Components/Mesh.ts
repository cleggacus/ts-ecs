import { Component } from "../ThingComponentSystem";

type MeshData = {
  type: "Circle",
  radius: number
} | {
  type: "Rect",
  width: number,
  height: number
}

class Mesh extends Component {
  constructor(public meshData: MeshData) {
    super();
  }
}

export default Mesh;

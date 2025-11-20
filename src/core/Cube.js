import { Mesh } from './Mesh.js';

export class Cube extends Mesh {
  constructor(position=[0,0,0], color=[1,1,1], size=1){
    super();
    this.position = position;
    this.color = color;
    this.size = size;
    this.init();
  }

  init(){
    const s = this.size/2;
    this.vertices = [
      -s,-s,-s,  s,-s,-s,  s,s,-s, -s,s,-s,
      -s,-s,s,   s,-s,s,   s,s,s,  -s,s,s
    ];

    this.normals = [
      0,0,-1, 0,0,-1,0,0,-1,0,0,-1,
      0,0,1, 0,0,1,0,0,1,0,0,1
    ];

    this.indices = [
      0,1,2, 0,2,3, 4,5,6, 4,6,7,
      0,4,7, 0,7,3, 1,5,6, 1,6,2,
      3,2,6, 3,6,7, 0,1,5, 0,5,4
    ];
  }
}

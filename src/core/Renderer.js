export class Renderer {
  constructor(canvas){
    this.canvas = canvas;
    this.gl = canvas.getContext('webgl');
    const gl = this.gl;
    gl.enable(gl.DEPTH_TEST);
    gl.clearColor(0.05,0.05,0.05,1);
    this.resize();
    window.addEventListener('resize',()=>this.resize());
  }

  resize(){
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.gl.viewport(0,0,this.canvas.width,this.canvas.height);
  }

  clear(){
    const gl = this.gl;
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  }
}

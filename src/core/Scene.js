export class Scene {
  constructor(){
    this.objects = [];
    this.lights = [];
  }

  add(...objs){
    this.objects.push(...objs);
  }

  render(renderer, camera){
    this.objects.forEach(obj=>{
      obj.draw(renderer.gl, camera, this.lights);
    });
  }
}

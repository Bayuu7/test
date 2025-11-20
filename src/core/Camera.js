export class Camera {
  constructor(fov, aspect, near, far){
    this.fov = fov;
    this.aspect = aspect;
    this.near = near;
    this.far = far;
    this.position = [0,0,5];
    this.target = [0,0,0];
  }

  getViewMatrix(){
    // Sederhana, bisa pakai math lib nanti
    return [];
  }

  getProjectionMatrix(){
    return [];
  }
}

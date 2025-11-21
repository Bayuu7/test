import { Constants } from '../Constants.js';
import { MathUtils } from './MathUtils.js';

export default class Vec3 {
  constructor(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  set(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
  }

  add(v) {
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
    return this;
  }

  subtract(v) {
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;
    return this;
  }

  multiply(v) {
    this.x *= v.x;
    this.y *= v.y;
    this.z *= v.z;
    return this;
  }

  multiplyScalar(s) {
    this.x *= s;
    this.y *= s;
    this.z *= s;
    return this;
  }

  divideScalar(s) {
    if (s === 0) throw new Error("Cannot divide Vec3 by zero scalar");
    return this.multiplyScalar(1 / s);
  }

  divide(v) {
    if (v.x === 0 || v.y === 0 || v.z === 0) throw new Error("Cannot divide Vec3 by zero component");
    this.x /= v.x;
    this.y /= v.y;
    this.z /= v.z;
    return this;
  }

  cross(v) {
    const x = this.y * v.z - this.z * v.y;
    const y = this.z * v.x - this.x * v.z;
    const z = this.x * v.y - this.y * v.x;
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
  }

  normalize() {
    const len = this.length();
    return len !== 0 ? this.multiplyScalar(1 / len) : this;
  }

  length() {
    return Math.sqrt(this.lengthSq());
  }

  lengthSq() {
    return this.x ** 2 + this.y ** 2 + this.z ** 2;
  }

  distanceTo(v) {
    return Math.sqrt(this.distanceToSq(v));
  }

  distanceToSq(v) {
    const dx = this.x - v.x;
    const dy = this.y - v.y;
    const dz = this.z - v.z;
    return dx ** 2 + dy ** 2 + dz ** 2;
  }

  lerp(target, t) {
    t = MathUtils.clamp(t, 0, 1);
    this.x += (target.x - this.x) * t;
    this.y += (target.y - this.y) * t;
    this.z += (target.z - this.z) * t;
    return this;
  }

  clamp(min, max) {
    this.x = MathUtils.clamp(this.x, min, max);
    this.y = MathUtils.clamp(this.y, min, max);
    this.z = MathUtils.clamp(this.z, min, max);
    return this;
  }

  dot(v) {
    return this.x * v.x + this.y * v.y + this.z * v.z;
  }

  reflect(normal) {
    const dot = this.dot(normal);
    this.x -= 2 * dot * normal.x;
    this.y -= 2 * dot * normal.y;
    this.z -= 2 * dot * normal.z;
    return this;
  }

  negate() {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
    return this;
  }

  equals(v, epsilon = Constants.EPSILON) {
    return Math.abs(this.x - v.x) < epsilon &&
           Math.abs(this.y - v.y) < epsilon &&
           Math.abs(this.z - v.z) < epsilon;
  }

  isZero(epsilon = Constants.EPSILON) {
    return this.lengthSq() < epsilon ** 2;
  }

  toArray() {
    return [this.x, this.y, this.z];
  }

  toObject() {
    return { x: this.x, y: this.y, z: this.z };
  }

  clone() {
    return new Vec3(this.x, this.y, this.z);
  }

  toString() {
    return `Vec3(${this.x.toFixed(2)}, ${this.y.toFixed(2)}, ${this.z.toFixed(2)})`;
  }

  static distance(a, b) {
    return a.distanceTo(b);
  }

  static distanceSq(a, b) {
    return a.distanceToSq(b);
  }

  static dot(a, b) {
    return a.dot(b);
  }

  static cross(a, b) {
    return a.clone().cross(b);
  }
}

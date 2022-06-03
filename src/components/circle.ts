import Point from '@Component/point';
import radian from '@lib/radian';

class Circle {
  center: Point;
  radius: number;

  constructor($Point, radius = 50) {
    this.center = $Point;
    this.radius = radius;
  }

  animate(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.fillStyle = `#bd93f9`;
    ctx.arc(this.center.x, this.center.y, this.radius, 0, radian(360));
    ctx.fill();
  }
}

export default Circle;

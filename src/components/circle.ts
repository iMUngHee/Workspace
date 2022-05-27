import Point from '@Component/point';
import radian from '@lib/radian';

class Circle {
  center: Point;

  constructor($Point) {
    this.center = $Point;
  }

  animate(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.fillStyle = `#bd93f9`;
    ctx.arc(this.center.x, this.center.y, 25, 0, radian(360));
    ctx.fill();
  }
}

export default Circle;

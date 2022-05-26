import Point from '@Component/point';
import Circle from '@Component/circle';

class App {
  $target: HTMLDivElement;

  canvas: HTMLCanvasElement = document.createElement('canvas');
  ctx: CanvasRenderingContext2D = this.canvas.getContext('2d');

  pixelRatio: number = window.devicePixelRatio > 1 ? 2 : 1;

  stageWidth: number = document.body.clientWidth;
  stageHeight: number = document.body.clientHeight;

  mousePos: Point;

  items: Circle[] = [];
  total: number = 1;

  constructor($target) {
    this.$target = $target;
    this.$target.appendChild(this.canvas);

    this.mousePos = new Point();

    for (let i = 0; i < this.total; i++) {
      this.items[i] = new Circle(new Point(100, 100));
    }

    window.addEventListener('resize', this.resize.bind(this), false);
    this.resize();

    window.requestAnimationFrame(this.animate.bind(this));

    document.addEventListener('pointerdown', this.onDown.bind(this), false);
    document.addEventListener('pointermove', this.onMove.bind(this), false);
    document.addEventListener('pointerup', this.onUp.bind(this), false);
  }

  resize() {
    this.canvas.width = this.stageWidth * this.pixelRatio;
    // this.canvas.height = this.stageHeight * this.pixelRatio;
    this.canvas.height = 1000;

    this.ctx.scale(this.pixelRatio, this.pixelRatio);

    this.ctx.shadowOffsetX = 0;
    this.ctx.shadowOffsetY = 5;
    this.ctx.shadowBlur = 6;
    this.ctx.shadowColor = `rgba(0,0,0,0.1)`;

    this.ctx.lineWidth = 2;
  }

  animate() {
    window.requestAnimationFrame(this.animate.bind(this));

    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    for (let i = 0; i < this.items.length; i++) {
      this.items[i].animate(this.ctx);
    }
  }

  onDown(e) {
    this.mousePos.x = e.clientX;
    this.mousePos.y = e.clientY;
  }
  onMove(e) {
    this.mousePos.x = e.clientX;
    this.mousePos.y = e.clientY;
  }
  onUp(e) {
    this.mousePos.x = e.clientX;
    this.mousePos.y = e.clientY;
  }
}

export default App;

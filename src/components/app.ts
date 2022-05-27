import Point from '@Component/point';
import Circle from '@Component/circle';

class App {
  $target: HTMLDivElement;

  canvas: HTMLCanvasElement = document.createElement('canvas');
  ctx: CanvasRenderingContext2D = this.canvas.getContext('2d');

  pixelRatio: number = window.devicePixelRatio > 1 ? 2 : 1;

  stageWidth: number;
  stageHeight: number;

  mousePos: Point;

  items: Circle[] = [];
  total: number = 1;

  constructor($target) {
    this.$target = $target;
    this.$target.style.width = `100vw`;
    this.$target.style.height = `100vh`;
    this.canvas.style.border = `1px black solid`;
    this.$target.appendChild(this.canvas);

    this.stageWidth = this.$target.clientWidth / 2;
    this.stageHeight = this.$target.clientHeight / 2;

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
    this.stageWidth = this.$target.clientWidth / 2;
    this.stageHeight = this.$target.clientHeight / 2;

    this.canvas.width = this.stageWidth;
    this.canvas.height = this.stageHeight;

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

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
  selectedItem: Circle = null;
  total: number = 40;

  constructor($target) {
    this.$target = $target;
    this.$target.style.width = `100vw`;
    this.$target.style.height = `100vh`;
    this.$target.style.display = `flex`;

    this.$target.appendChild(this.canvas);

    this.stageWidth = this.$target.clientWidth;
    this.stageHeight = this.$target.clientHeight;

    this.mousePos = new Point();

    for (let i = 0; i < this.total; i++) {
      const x = 50 + (i % 8) * 150;
      const y = 50 + Math.floor(i / 8) * 150;

      this.items[i] = new Circle(new Point(x, y));
    }

    window.addEventListener('resize', this.resize.bind(this), false);
    this.resize();

    window.requestAnimationFrame(this.animate.bind(this));

    this.canvas.addEventListener('click', this.onClick.bind(this), false);
  }

  resize() {
    this.stageWidth = this.$target.clientWidth;
    this.stageHeight = this.$target.clientHeight;

    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageHeight * this.pixelRatio;

    this.ctx.shadowBlur = 5;
    this.ctx.shadowOffsetX = 0;
    this.ctx.shadowOffsetY = 4;
    this.ctx.shadowColor = `rgba(0,0,0,0.7)`;

    this.ctx.scale(this.pixelRatio, this.pixelRatio);

    this.ctx.lineWidth = 2;
  }

  animate() {
    window.requestAnimationFrame(this.animate.bind(this));

    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    for (let i = 0; i < this.items.length; i++) {
      this.items[i].animate(this.ctx);
    }
  }

  onClick(e) {
    this.mousePos.x = e.clientX;
    this.mousePos.y = e.clientY;

    let circle: Circle;

    if (!this.selectedItem) {
      for (let i = 0; i < this.items.length; i++) {
        circle = this.items[i];
        if (
          (this.mousePos.x - circle.center.x) ** 2 +
            (this.mousePos.y - circle.center.y) ** 2 <=
          circle.radius ** 2
        ) {
          this.selectedItem = circle;
        }
      }
    }

    if (this.selectedItem) {
      this.selectedItem.radius = 100;
      this.selectedItem.animate(this.ctx);
      if (
        (this.mousePos.x - this.selectedItem.center.x) ** 2 +
          (this.mousePos.y - this.selectedItem.center.y) ** 2 >
        this.selectedItem.radius ** 2
      ) {
        this.selectedItem.radius = 50;
        this.selectedItem.animate(this.ctx);
        this.selectedItem = null;
      }
    }
  }
}

export default App;

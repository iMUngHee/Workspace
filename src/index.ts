import '@Style/reset.scss';
import '@Style/global.scss';

class App {
  canvas: HTMLCanvasElement = document.createElement('canvas');
  ctx: CanvasRenderingContext2D = this.canvas.getContext('2d');

  pixelRatio: number = window.devicePixelRatio > 1 ? 2 : 1;

  stageWidth: number = document.body.clientWidth;
  stageHeight: number = document.body.clientHeight;

  constructor($target) {
    $target.appendChild(this.canvas);

    window.addEventListener('resize', this.resize.bind(this), false);
    this.resize();

    window.requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageHeight * this.pixelRatio;

    this.ctx.scale(this.pixelRatio, this.pixelRatio);
  }

  animate() {
    window.requestAnimationFrame(this.animate.bind(this));

    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
  }
}

window.onload = () => {
  new App(document.querySelector('.root'));
};

import '@Style/reset.scss';
import '@Style/global.scss';
import App from '@Component/app';

window.onload = () => {
  new App(document.querySelector('.root'));
};

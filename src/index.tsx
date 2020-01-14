import ReactDOM from '/web_modules/react-dom.js';
import { jsx } from '/web_modules/@emotion/core.js';

(async (): Promise<void> => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('lib/serviceWorker.js');
      registration.update();
      console.log('serviceWorker registered successfully!');
    } catch (err) {
      console.log('ServiceWorker registration failed');
      console.error(err);
    }
  }
})();

const app = <h2 css={{ color: 'hotpink' }}>Hello World!</h2>;

const elem = document.getElementById('app');

if (elem) {
  ReactDOM.render(app, document.getElementById('app'));
}

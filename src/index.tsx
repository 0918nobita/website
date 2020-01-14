import ReactDOM from '/web_modules/react-dom.js';
import { jsx } from '/web_modules/@emotion/core.js';

const app = <h2 css={{ color: 'hotpink' }}>Hello World!</h2>;

const elem = document.getElementById('app');

if (elem) {
  ReactDOM.render(app, document.getElementById('app'));
}

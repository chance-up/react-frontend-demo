import { Button } from './Button.js';
import { Span } from './Text.js';

function App() {
  const spanElement = React.createElement(Span, {text: 'Hello World'}, null)
  const buttonElement = Button();
  const divContainer = React.createElement('div', null, spanElement, buttonElement);
  return divContainer;
}

ReactDOM.render(React.createElement(App, null, null), document.getElementById('root'));

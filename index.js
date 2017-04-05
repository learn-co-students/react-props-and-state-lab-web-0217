const React = require('react');
const ReactDOM = require('react-dom');
require('./fetch-setup');

// const App = require('./components/App');
const Pet = require('./components/Pet');

ReactDOM.render(
  <Pet pet={MALE_DOG} />,
  document.getElementById('main')
);

require('./test/index-test.js'); // Leave this in!

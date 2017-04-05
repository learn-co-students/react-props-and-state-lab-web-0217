const React = require('react');
const ReactDOM = require('react-dom');
require('./fetch-setup');

// const {getAll} = require('./data/pets')
// const ALL_PETS = getAll();
// const ADOPTED_PETS = [ALL_PETS[0].id];

// const App = require('./components/App');
const Filters = require('./components/Filters');

const totallyChangedType = (type) => {
  console.log(`Changed to type ${type}`)
}

ReactDOM.render(
  <Filters filters={{type: "micropig"}} onChangeType={totallyChangedType}/>,
  document.getElementById('main')
);

require('./test/index-test.js'); // Leave this in!

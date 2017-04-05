const React = require('react');
const ReactDOM = require('react-dom');
require('./fetch-setup');

const Pet = require('./components/Pet');

const MALE_DOG = {
  "id": "9e7cc723-d7f5-440d-8ead-c311e68014ee",
  "type": "dog",
  "gender": "male",
  "age": 8,
  "weight": 6,
  "name": "Kennedy"
};

const FEMALE_CAT = {
  "id": "86520b4b-7849-4462-b511-cddc7f416ad6",
  "type": "cat",
  "gender": "female",
  "age": 7,
  "weight": 6,
  "name": "Cuddles"
};


ReactDOM.render(
  <Pet pet={MALE_DOG} />,
  document.getElementById('main')
);

require('./test/index-test.js'); // Leave this in!

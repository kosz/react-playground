import React from 'react';
import Test from './test.jsx!';
import Pad from './pad.jsx!';
import Bacon from 'baconjs';

console.log('hello');
console.log(Bacon);

React.render(
  <div>
    <Pad />
    <Test />
  </div>
, document.getElementById('main')
)

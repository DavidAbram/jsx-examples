let name;
const cond = true;
if(cond) {
  name = 'David';
} else {
  name = 'Ivan'
}

const nameElement = <div>{name}</div>;

const nameElement1 = <div>{cond ? 'David' : 'Ivan'}</div>;

//--------------------------------------//

'use strict';

var name;
var cond = true;
if (cond) {
  name = 'David';
} else {
  name = 'Ivan';
}

var nameElement = React.createElement(
  'div',
  null,
  name
);

var nameElement1 = React.createElement(
  'div',
  null,
  cond ? 'David' : 'Ivan'
);
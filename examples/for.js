const names = ['David', 'Ivan', 'Pero'];

const nameElement = <div>{names.join(' i ')}</div>;

//--------------------------------------//

'use strict';

var names = ['David', 'Ivan', 'Pero'];

var nameElement = React.createElement(
  'div',
  null,
  names.join(' i ')
);
const name = 'David';

const nameElement = <div>{name}</div>;

//--------------------------------------//

const name = 'David';

const nameElement = React.createElement(
  'div',
  null,
  name
);
const names = [
  <span>David</span>,
  <span>Pero</span>,
];

const nameElement = <div>{names}</div>;

//--------------------------------------//
var names = [React.createElement(
  "span",
  null,
  "David"
), React.createElement(
  "span",
  null,
  "Pero"
)];

var nameElement = React.createElement(
  "div",
  null,
  names
);
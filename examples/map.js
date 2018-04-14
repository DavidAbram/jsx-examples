const users = [{
  name: 'David',
  age: 28,
},
{
  name: 'Pero',
  age: 22,
}];

const usersListElement = <ul>{
  users.map(user => <li>{`${user.name} ${user.age}`}</li>)
}</ul>;

//--------------------------------------//
var users = [{
  name: 'David',
  age: 28
}, {
  name: 'Pero',
  age: 22
}];

var usersListElement = React.createElement(
  'ul',
  null,
  users.map(function (user) {
    return React.createElement(
      'li',
      null,
      user.name + ' ' + user.age
    );
  })
);
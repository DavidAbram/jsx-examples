class Hello extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      "Hello ",
      this.props.name
    );
  }
}

ReactDOM.render(
  React.createElement(Hello, { name: "World" }),
  document.getElementById('container')
);

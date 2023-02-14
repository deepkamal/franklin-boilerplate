class React1 extends React.Component {
  render() {
    return React.createElement(
      "div",
      { className: "react1" },
      `Component added via react with NAME: ${this.props.name}`
    )

  }
}

export default (parentElement,name)=>ReactDOM.render(React.createElement( React1,{name}),parentElement)

import React, { Component } from 'react';
import { render } from 'react-dom';
import Dock from 'react-dock';

class InjectApp extends Component {
  constructor(props) {
    super(props);
    this.state = { isVisible: false };
  }
  componentDidMount() {
    console.log('Loaded!');
    window.addEventListener('mouseup', this.handleMouseUp);
  }
  handleMouseUp = () => {
    let text = window.getSelection().toString();
    if (text) {
      console.log(text);
      this.setState({ isVisible: !this.state.isVisible });
    }
  }
  buttonOnClick = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };
  render() {
    return (
      <div>
        <button onClick={this.buttonOnClick}>
          Open TodoApp
        </button>
        <Dock
          position="right"
          dimMode="transparent"
          defaultSize={0.4}
          isVisible={this.state.isVisible}
        >
      		<h1>Hi. Welcome to the Dock.</h1>
        </Dock>
      </div>
    );
  }
}

window.addEventListener('load', () => {
  console.log('Loading!');
  const injectDOM = document.createElement('div');
  injectDOM.className = 'inject-react-example';
  injectDOM.style.textAlign = 'center';
  document.body.appendChild(injectDOM);
  render(<InjectApp />, injectDOM);
});

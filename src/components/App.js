import React, { Component } from 'react';

export default class App extends Component {
  state = { resource: 'post'}
  render() {
    return (
      <div>
        <div>
          <button onClick={() => this.setState({resource: 'post'})}>Post</button>
           <button onClick={() => this.setState({resource: 'todo'})}>ToDO</button>
        </div>
        {this.state.resource}
      </div>
    );
  }
}

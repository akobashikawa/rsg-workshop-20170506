import React, { Component } from 'react';

class Hello extends Component {
  render() {
    return (
    	<div>
	      <h2>Hola {this.props.name}</h2>
    	</div>
    );
  }
}

export default Hello;
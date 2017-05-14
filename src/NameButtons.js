import React, { Component } from 'react';

class NameButtons extends Component {
	constructor(props) {
    super(props);

    this.clickHandler = this.clickHandler.bind(this);
  }

	clickHandler(event) {
		this.props.onChange(event.target.innerHTML);
	}

	render() {
    return (
    	<div>
	    	<button onClick={this.clickHandler}>María</button>
	    	<button onClick={this.clickHandler}>José</button>
	    	<button onClick={this.clickHandler}>Jesús</button>
	    	<button onClick={this.props.onReset}>Reset</button>
    	</div>
    );
  }
}

export default NameButtons;
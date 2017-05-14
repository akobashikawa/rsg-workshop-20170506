import React, { Component } from 'react';

class NameInput extends Component {
	constructor(props) {
    super(props);

    this.changeHandler = this.changeHandler.bind(this);
  }

	changeHandler(event) {
		this.props.onChange(event.target.value);
	}

	render() {
    return (
    	<div>
	    	<input type="text"
	    		placeholder="Tu nombre"
	    		onChange={this.changeHandler}
	    		value={this.props.name}
	    	/>
    	</div>
    );
  }
}

export default NameInput;
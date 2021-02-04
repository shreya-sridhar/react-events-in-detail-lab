// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component {
	click = (event) => {
		this.props.onReceiveCoordinates([event.clientX, event.clientY])
	}

	render() {
		return(
			<div>
				<button onClick={this.click} />
			</div>
		)
	}
}
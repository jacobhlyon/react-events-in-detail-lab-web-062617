// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {

	// constructor(props) {
	// 	super(props)

	handlesClick = (event) => {
		const coordinatesArray = [event.clientX, event.clientY]
		this.props.onReceiveCoordinates(coordinatesArray)
	}

	render() {
		return(
			<button onClick={this.handlesClick} />
		)
	}

}

export default CoordinatesButton
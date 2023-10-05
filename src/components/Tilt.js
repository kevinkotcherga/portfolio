import React, { Component } from 'react';
import VanillaTilt from 'vanilla-tilt';

class Tilt extends Component {
	componentDidMount() {
		if (window.innerWidth > 992) {
			VanillaTilt.init(this.el, {
				// options tilt.js
				fullPageListening: true,
			});
		}
	}

	componentWillUnmount() {
		if (window.innerWidth > 992) {
			VanillaTilt.destroy(this.el);
		}
	}

	render() {
		return (
			<div
				ref={el => (this.el = el)}
				data-tilt
				data-tilt-full-page-listening
				data-tilt-reverse="true"
				data-tilt-max="30"
				className="tilt"
			>
				{this.props.children}
			</div>
		);
	}
}

export default Tilt;

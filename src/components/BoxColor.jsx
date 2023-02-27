import React from 'react';

const BoxColor = (props) => {
	const {r, g, b} = props;

	const theColor = {
		backgroundColor: `rgb(${r},${g},${b})`
	};
	
	return (
		<div className="box-color" style={theColor}>
			<p className="color">RGB({r},{g},{b})</p>
		</div>
	)
}

export default BoxColor;
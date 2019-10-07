import React, { Component } from 'react';
import styles from './PixelGrid.module.scss';

export class PixelGrid extends Component
{
	state = {
		mousePressed: false
	}

	pixelGrid = React.createRef();

	componentDidMount()
	{
		this.pixelGrid.current.addEventListener('mousedown', () => this.checkMousePressed(true));
		this.pixelGrid.current.addEventListener('mouseup', () => this.checkMousePressed(false));
		this.pixelGrid.current.addEventListener('mouseover', this.paintPixel);
	}

	componentDidUpdate()
	{
		if (this.props.gridClear) this.pixelGrid.current.childNodes.forEach(pixel => pixel.style.backgroundColor = '#fff');
	}

	checkMousePressed = boolean =>
	{
		this.setState({ mousePressed: boolean });
	}

	paintPixel = e => 
	{
		if (this.state.mousePressed) e.target.style.backgroundColor = this.props.selectedColor;
	}

	render()
	{
		return (
			<div className={styles.pixelGrid} ref={this.pixelGrid}>
				{this.props.pixels.map((pixel, index) =>
					<div key={index} style={{ backgroundColor: pixel && !this.props.gridClear ? pixel : '#fff' }} />
				)}
			</div>
		)
	}
}

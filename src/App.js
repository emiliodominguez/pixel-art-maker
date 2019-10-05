import React, { Component } from 'react';
import { PixelGrid } from './components/PixelGrid';
import { ColorPicker } from './components/ColorPicker';
import { Examples } from './components/Examples';
import { colors } from './constants/Colors';
import { examplePuzzles } from './constants/ExamplePuzzles';
import './App.scss';

class App extends Component
{
	state = {
		pixels: [...Array(1749)],
		colors: colors,
		examples: examplePuzzles,
		exampleSelected: '',
		selectedColor: null,
		gridClear: null
	}

	componentDidUpdate = () =>
	{
		if (this.state.gridClear) this.setState({ gridClear: null });
	}

	setExample = (pixels, name) =>
	{
		this.setState({
			pixels: pixels,
			exampleSelected: name,
			gridClear: true,
		});
	}

	setColor = e =>
	{
		this.setState({ selectedColor: e.target.style.backgroundColor });
	}

	clearGrid = () =>
	{
		this.setState({
			pixels: [...Array(1749)],
			gridClear: true
		});
	}

	render()
	{
		return (
			<div className="main-container">
				<PixelGrid
					pixels={ this.state.pixels }
					selectedColor={ this.state.selectedColor || '#000' }
					gridClear={ this.state.gridClear }
				/>

				<div className="right-panel">
					<img
						className="logo"
						src={`${process.env.PUBLIC_URL}/logo.png`}
						alt="Los Simpsons"
					/>

					<ColorPicker
						colors={ this.state.colors.sort() }
						onSelectColor={ this.setColor }
						selectedColor={ this.state.selectedColor || '#000' }
					/>

					<div className="options">
						<button onClick={ this.clearGrid }>Borrar todo</button>
					</div>
				</div>

				<div className="puzzle-examples">
					<Examples
						examples={ this.state.examples }
						onSelectExample={ this.setExample }
						exampleSelected={ this.state.exampleSelected }
					/>
				</div>
			</div>
		);
	}
}

export default App;

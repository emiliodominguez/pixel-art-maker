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
		selectedColor: null,
		gridClear: null
	}

	componentDidUpdate = () =>
	{
		if (this.state.gridClear) this.setState({ gridClear: null });
	}

	setPixelGrid = pixels =>
	{
		this.setState({
			pixels: pixels,
			gridClear: true
		});
	}

	setColor = e =>
	{
		this.setState({ selectedColor: e.target.style.backgroundColor });
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
						<button onClick={ () => this.setPixelGrid([...Array(1749)]) }>Borrar todo</button>
					</div>
				</div>

				<div className="puzzle-examples">
					<Examples
						examples={ this.state.examples }
						onSelectExample={ this.setPixelGrid }
					/>
				</div>
			</div>
		);
	}
}

export default App;

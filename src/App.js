import React from 'react';

import './App.scss';

import PixelGrid from './components/PixelGrid';
import ColorPicker from './components/ColorPicker';
import Examples from './components/Examples';
import { colors } from './constants/Colors';
import { puzzles } from './constants/Puzzles';

class App extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            puzzles: puzzles,
            colorNames: colors,
            selectedColor: '#000',
            gridClear: null
        }
    }

    componentDidUpdate = () =>
    {
        if (this.state.gridClear)
            this.setState({ gridClear: null });
    }

    clearGrid = () =>
    {
        this.setState({ gridClear: true });
    }

    selectColor = e =>
    {
        this.setState({ selectedColor: e.target.style.backgroundColor });
    }

    render()
    {
        const { puzzles, colorNames, selectedColor, previewActive, gridClear } = this.state;

        return (
            <>
                <div className="main-container">
                    <PixelGrid
                        selectedColor={selectedColor}
                        previewActive={previewActive}
                        gridClear={gridClear}
                    />

                    <div className="container-control-group">
                        <img
                            className="logo"
                            src={require('./static/logo.png')}
                            alt="Los Simpsons"
                        />

                        <ColorPicker
                            colorNames={colorNames.sort()}
                            selectColor={this.selectColor}
                            selectedColor={selectedColor}
                        />

                        <div className="options">
                            <button onClick={this.clearGrid}>Borrar todo</button>
                        </div>
                    </div>
                </div>

                <Examples
                    puzzles={puzzles}
                />
            </>
        );
    }
}

export default App;

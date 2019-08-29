import React from 'react';

import './ColorPicker.scss';

class ColorPicker extends React.Component
{
    generateColorPalette = () =>
    {
        const { colorNames, selectColor } = this.props;
        const colors = [];

        for (let i = 0; i < colorNames.length; i++) {
            let color = colorNames[i];

            colors.push(
                <button
                    onClick={ selectColor }
                    style={{ backgroundColor: color }}
                    key={ i }>
                </button>
            );
        }

        return colors;
    }

    render()
    {
		const { selectedColor } = this.props;

        return (
			<>
				<div className="color-palette">
					{ this.generateColorPalette() }
				</div>
				
				<div className="selected-color" style={{ backgroundColor: selectedColor }} />
			</>
        );
    }
}

export default ColorPicker;

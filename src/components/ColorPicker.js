import React from 'react';

import './ColorPicker.scss';

class ColorPicker extends React.Component
{
    generateColorPalette = () =>
    {
        let colors = [];

        for (let i = 0; i < this.props.colorNames.length; i++)
        {
            let color = this.props.colorNames[i];

            colors.push(
                <button
                    onClick={this.props.selectColor}
                    style={{ backgroundColor: color }}
                    key={i}>
                </button>
            );
        }

        return colors;
    }

    render()
    {
        return (
            <>
                <div className="color-palette">
                    {this.generateColorPalette()}
                </div>

                <div className="selected-color" style={{ backgroundColor: this.props.selectedColor }} />
            </>
        );
    }
}

export default ColorPicker;

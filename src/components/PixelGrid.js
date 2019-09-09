import React from 'react';

import './PixelGrid.scss';

class PixelGrid extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            pixelGrid: 1749,
            mousePressed: false
        }
    }

    componentDidMount()
    {
        const pixelGrid = document.querySelector('.pixel-grid');

        pixelGrid.addEventListener('mousedown', () => this.checkMousePressed(true));
        pixelGrid.addEventListener('mouseup', () => this.checkMousePressed(false));
        pixelGrid.addEventListener('mouseover', this.paintPixel);
    }

    componentDidUpdate()
    {
        if (this.props.gridClear)
            this.pixelGridActions('clear');
    }

    generatePixelGrid = () =>
    {
        let pixels = [];

        for (let i = 0; i < this.state.pixelGrid; i++)
        {
            pixels.push(<div key={i}></div>)
        }

        return pixels;
    }

    checkMousePressed = boolean =>
    {
        this.setState({ mousePressed: boolean });
    }

    paintPixel = e => 
    {
        if (this.state.mousePressed)
            e.target.style.backgroundColor = this.props.selectedColor;
    }

    pixelGridActions = (action) =>
    {
        const pixelGrid = document.querySelectorAll('.pixel-grid div');

        if (action === 'preview ')
            pixelGrid.forEach(pixel => pixel.style.outline = 'transparent');
        else if (action === 'clear')
            pixelGrid.forEach(pixel => pixel.style.backgroundColor = '#fff');
    }

    render()
    {
        return (
            <div className="pixel-grid">
                {this.generatePixelGrid()}
            </div>
        );
    }
}

export default PixelGrid;

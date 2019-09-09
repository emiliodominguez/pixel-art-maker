import React from 'react';

import './Examples.scss';

class Examples extends React.Component
{
    render()
    {
        return (
            <ul className="example-images">
                {this.props.puzzles.map((puzzle, index) =>
                    <li key={index}>
                        <img
                            src={require(`../static/puzzles/${puzzle}.png`)}
                            alt={puzzle}
                        />
                    </li>
                )}
            </ul>
        );
    }
}

export default Examples;

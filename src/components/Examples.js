import React from 'react';

import './Examples.scss';

class Examples extends React.Component
{
    render()
    {
        const { puzzles } = this.props;

        return (
            <ul className="example-images">
                {puzzles.map(( puzzle, index ) =>
                    <li key={ index }>
                        <img
                            src={ require(`../static/puzzles/${ puzzle }.png`) }
                            alt={ puzzle }
                        />
                    </li>
                )}
            </ul>
        );
    }
}

export default Examples;

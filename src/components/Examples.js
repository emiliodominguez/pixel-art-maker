import React from 'react';
import './Examples.scss';

export const Examples = ({ examples, onSelectExample, exampleSelected }) =>
(
	<div className="examples">
		{examples.map((example, index) =>
			<img
				className={ exampleSelected === example.name ? 'selected' : '' }
				key={ index }
				src={ `${process.env.PUBLIC_URL}/puzzles/${example.name}.png` }
				alt={ example.name }
				onClick={ () => onSelectExample(example.pixels, example.name) }
			/>
		)}
	</div>
)
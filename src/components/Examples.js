import React from 'react';
import './Examples.scss';

export const Examples = ({ examples, onSelectExample }) =>
(
	<ul className="examples">
		{examples.map((example, index) =>
			<li key={index} onClick={() => onSelectExample(example.colors)}>
				<img
					src={`${process.env.PUBLIC_URL}/puzzles/${example.name}.png`}
					alt={example.name}
				/>
			</li>
		)}
	</ul>
)
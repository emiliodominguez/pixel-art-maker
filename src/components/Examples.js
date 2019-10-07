import React from 'react';
import styles from './Examples.module.scss';

export const Examples = ({ examples, onSelectExample, exampleSelected }) =>
	(
		<div className={styles.examples}>
			{examples.map((example, index) =>
				<img
					className={exampleSelected === example.name ? styles.selected : ''}
					key={index}
					src={`${process.env.PUBLIC_URL}/puzzles/${example.name.toLowerCase()}.png`}
					alt={example.name}
					onClick={() => onSelectExample(example.pixels, example.name)}
				/>
			)}
		</div>
	)
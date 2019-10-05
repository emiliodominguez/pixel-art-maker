import React from 'react';
import './ColorPicker.scss';

export const ColorPicker = ({ colors, onSelectColor, selectedColor }) =>
(
	<>
		<div className="color-palette">
			{colors.map((color, index) =>
				<button
					onClick={ onSelectColor }
					style={{ backgroundColor: color }}
					key={ index }>
				</button>
			)}
		</div>

		<div className="selected-color" style={{ backgroundColor: selectedColor }} />
	</>
);

import React from 'react';
import styles from './ColorPicker.module.scss';

export const ColorPicker = ({ colors, onSelectColor, selectedColor }) =>
(
	<>
		<div className={styles.colorPalette}>
			{colors.map((color, index) =>
				<button
					onClick={onSelectColor}
					style={{ backgroundColor: color }}
					key={index}
				/>
			)}
		</div>

		<div className={styles.selectedColor} style={{ backgroundColor: selectedColor }} />
	</>
);

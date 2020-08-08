import React, { useState } from 'react';
import sections from '../../utils/sections';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
const Directory = () => {
	return (
		<div className="directory-menu">
			{sections.map((el) => {
				const { title, imageUrl, id , size} = el;
				return <MenuItem key={id} imageUrl={imageUrl} title={title} size={size}/>;
			})}
		</div>
	);
};

export default Directory;

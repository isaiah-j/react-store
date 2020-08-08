import React from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, history }) => {
	return (
		<div
			style={{
				backgroundImage: `url(${imageUrl})`
			}}
			className={`menu-item ${size}`}
			onClick={() => history.push(`/shop/${title}`)}
		>
			<div className="content">
				<h1 className="title">{title}</h1>
				<span className="subtitle">SHOP NOW</span>
			</div>
		</div>
	);
};

export default withRouter(MenuItem);

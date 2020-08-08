import React from 'react';
import './preview-file.collection.styles.scss';
import CollectionItem from '../collection-item/collection-item.component'

const PreviewCollection = ({ title, items }) => {
    console.log(items)
	return (
		<div className="collection-preview">
			<h1 className="title">{title}</h1>
			<div className="preview">
				{items.map((item) => {
                    const {name, id, imageUrl, price} = item
					return <CollectionItem key={id} name={name} price={price} imageUrl={imageUrl}></CollectionItem>
				})}
			</div>
		</div>
	);
};

export default PreviewCollection;

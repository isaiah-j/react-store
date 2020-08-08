import React, { useState } from 'react';
import shopData from '../../utils/shopData';
import PreviewCollection from '../../components/preview-collection/preview-collection.component';

const ShopPage = () => {
	let [ collections, setCollections ] = useState(shopData);
	console.log(collections);
	return (
		<div>
			{collections.map(({id, title, items}) => {
                // Limit the items preview to only 4 items
                items = items.slice(0,4)
				return <PreviewCollection key={id} title={title} items={items} />;
			})}
		</div>
	);
};
export default ShopPage;

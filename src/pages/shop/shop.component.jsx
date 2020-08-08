import React, { useState } from 'react';
import shopData from '../../utils/shopData';

const ShopPage = () => {
    let [ collections, setCollections ] = useState(shopData);
    console.log(collections)
	return (
		<div>
			<h1>This is the shop</h1>
		</div>
	);
};
export default ShopPage;

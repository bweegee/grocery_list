import React from 'react';
import React from './GroceryList';

const List = ({ items, name, groceryClick }) => (
	<div>
		<h2>{name}</h2>
		<ul>
			{ items.map( item => <GroceryList key={item.id} {...item} groceryClick={groceryClick} /> )} 
		</ul>
	</div>
)

export default List;

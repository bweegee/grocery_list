import React from 'react';

const GroceryList = ({ id, name, bought }) => (
	<li
		style={ bought ? {...styles.grocery, ...styles.bought } : styles.grocery }
		onClick={ () => groceryClick(id) }
	>
		{ name }
	</li>
);

const styles = {
	grocery: { cursor: 'pointer' },
	bought : { color: 'grey', textDecoration: 'line-through' },
};

export default GroceryList;

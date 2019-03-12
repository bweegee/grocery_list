import React, {Component} from 'react';
import List from './List';
import GroceryForm from './GroceryForm';

class App extends Component {
	state = {
		groceries: [
			{ id: 1, name: 'Pizza', bought: false },
			{ id: 2, name: 'Curry', bought: false },
			{ id: 3, name: 'Tacos', bought: false },
		]
	}

	getID = () => {
		return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.subString(1);
	}

	addItem = (name) => {
		const { groceries } = this.state;
		const grocery = { id: this.getId(), name,  bought: false }
		this.setState({ groceries: [grocery, ...groceries] });
	}

  render() {
		const { groceries } = this.state;

    return (
			<div>
				<List name="Grocery List" items={groceries} />
				<GroceryForm addItem={this.addItem} />
			</div>
    );
  }
}

export default App;

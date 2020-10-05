import React, {Component} from "react";
import FlipMove from "react-flip-move";

class TodoList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			newItem:"",
			list: []
		};

		this.addItem = this.addItem.bind(this);
		//this.search = this.search.bind(this);
	}

	updateInput(key, value){
		//update react state
		this.setState({
			[key]: value
		});
	}

	addItem(e) {
		if (this.state.newItem.trim() === "") {
			alert("Cannot enter empty space!");
		}
		else {
			//create item with unique id
			const newItem={
				id: 1 + Math.random(),
				value: this.state.newItem.slice()
			};

			//copy of current list of items
			const list = [...this.state.list];

			//add new item to list
			list.push(newItem);

			//update state with new list and reset newItem input
			this.setState({
				list,
				newItem:""
			});
		}	
	}

	deleteItem(id){
		//copy current list of items
		const list = [...this.state.list];

		//filter out item being deleted
		const updatedList = list.filter(item => item.id !== id);

		this.setState({list: updatedList});
	}

	render() {
		return (
			<div className="todoListMain">
				<div className="header">
					<form onSubmit={(e) => {this.addItem();e.preventDefault();}}>
						<input type="text" placeholder="enter task" value={this.state.newItem} onChange={e => this.updateInput("newItem", e.target.value)}>
						</input>
						<span className="addButton" onClick={() => this.addItem()}></span>
						<br/>
					</form>	

						<ul className="theList">
							<FlipMove duration={250} easing="ease-out">
							{this.state.list.map(item => {
								return(	
									<li key={item.id}>
										
										{item.value}
										
										<button className="deleteButton" onClick={() => this.deleteItem(item.id)}>	
										</button>
										
									</li>
									)
							})}
							</FlipMove>
						</ul>

				</div>
			</div>
			);
	}
}

export default TodoList;
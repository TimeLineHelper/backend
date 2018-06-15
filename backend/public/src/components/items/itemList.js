import React, {Component} from 'react';

import Item from './items/item';

export default class ItemList extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = handleDelete.bind(this);
    this.displayAllItems = displayAllItems.bind(this);
  }

  handleDelete(itemId) {
    this.props.itemDelete(itemId);
  }

  displayAllItems() {
    let filteredList = this.props.items.filter(item => {
      return item.taskId === this.props.taskId
    });
    return filteredList.map(item => {
      return <Item
        taskId={this.props.taskId}
        key={item.id}
        id={item.id}
        item={item}
        delete={this.handleDelete}
        toggleEdit={item.toggleEdit}
      />;
    });
  }

  render() {
    return <div>
      <h2>ToDo List:</h2>
      <ul>{this.props.displayAllItems}</ul>
    </div>;
  }
}
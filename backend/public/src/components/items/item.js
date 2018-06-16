import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import ItemForm from './itemForm';

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item,
      isEditing: false,
    };

    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  toggleEdit() {
    this.setState({isEditing: !this.state.isEditing});
  }

  handleDelete() {
    this.props.deleteItem(this.props.id);
  }

  cancel() {
    this.toggleEdit();
  }
  
  render() {
    if(this.state.isEditing === true) {
      return <div>
        <TaskForm action='update'
          itemId={this.props.id}
          name={this.props.name}
          description={this.props.description}
          toggleEdit={this.toggleEdit}
          cancel={this.cancel}>
        </TaskForm>
      </div>;
    } else {
      return (
        <div>
          <li>
            {this.props.name}
            ${this.props.description}
          </li>
          <button onClick={this.handleDelete}>Delete</button>
          <button onClick={this.toggleEdit}>Cancel</button>
        </div>
      );
    }
  }
}
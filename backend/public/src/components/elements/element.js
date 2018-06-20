import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import ElementForm from './elementForm';

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
    };
  }

  toggleEdit = () => {
    return this.setState({isEditing: !this.state.isEditing});
  }

  handleDelete = () => {
    return this.props.removeElement(this.props.element.id);
  }

  cancel = () => {
    return this.toggleEdit();
  }
  
  render() {
    if(this.state.isEditing === true) {
      return <div>
        <ElementForm buttonText='update'
          element={this.props.element}
          toggleEdit={this.toggleEdit}
          cancel={this.cancel}>
        </ElementForm>
      </div>;
    } else {
      return (
        <div>
          <li>
            {this.props.name}
            {this.props.description}
          </li>
          <button onClick={this.handleDelete}>Delete</button>
          <button onClick={this.toggleEdit}>Cancel</button>
        </div>
      );
    }
  }
}
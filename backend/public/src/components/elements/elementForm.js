import React, {Component} from 'react';

export default class ElementForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // timestamp: new Date(),
      // name: '',
      // description: '',
      // taskId: this.props.taskId,
      isEditing: false,
    };
  }

  handleChange = (ev) => {
    this.setState({[ev.target.name] : ev.target.value});
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    let createdElement = {
      timestamp: new Date(),
      name: '',
      description: '',
      taskId: uuidv4(),
      isEditing: false,
    }
    this.props.addElement(createdElement);
  }

  render() {
    return <form
      onSubmit={this.handleSubmit}>
      <input 
        onChange={this.handleChange}
        name="name"
        type="text"
        placeholder="name"
        value={this.state.name}
      />
      <input 
        onChange={this.handleChange}
        name="description"
        type="text"
        placeholder="description"
        value={this.state.description}
      />
      <button 
        onClick={this.props.cancel}>
        cancel
      </button>
      <button 
        type='submit'>
        {this.props.buttonText === 'create' ? 'Add Item' : 'Update Item'}
      </button>
    </form>;
  }
}
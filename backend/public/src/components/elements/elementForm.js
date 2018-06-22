import React, {Component} from 'react';
import uuidv4 from 'uuid/v4';

export default class ElementForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
    };
  }

  handleChange = (ev) => {
    console.log('handlechange before', ev.target);
    this.setState({[ev.target.name] : ev.target.value});
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    let createdElement = {
      name: this.state.name,
      description: this.state.description,
      date: new Date(),
      id: uuidv4(),
      isEditing: false,
    }
    console.log('addElement function', this.props.addElement);
    this.props.addElement(createdElement);
    this.setState({name: '', description: ''})
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
      <input
        onChange={this.handleChange}
        name="date"
        type="number"
        placeholder="date"
        value={this.state.date}
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
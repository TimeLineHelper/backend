import React, { Component } from 'react';
import uuidv4 from 'uuidv4';
import Timeline from '../timeline';

export default class TaskForm extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   isEditing: false,
    //   completed: false,
    // };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (ev) => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    if (this.props.buttonText === 'create') {
      let id = uuidv4();
      let name = ev.target.name.value;
      let items = ev.target.items.value;
      this.props.addTask({ id, name, items });
    }
    else {
      let newValue = {};
      Object.assign(newValue, this.props.tasks, this.state);
      console.log('new val', newValue);
      this.props.toggleEdit();
      this.props.addTask({...newValue});
    }
  }

  render() { 
    return <form 
      onSubmit={this.handleSubmit}>
      <input 
        onChange={this.handleChange} 
        name='name'
        type='text'
        placeholder='name'
      />
      <input 
        onChange={this.handleChange}
        name='items'
        type='text'
        placeholder='items'
      />
      <button type='submit'>{this.props.buttonText === 'create' ? 'Submit' : 'Update'} </button>
    </form>;
  }
}
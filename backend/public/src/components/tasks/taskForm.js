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
    console.log('created task');
    if (this.props.buttonText === 'create') {
      let createdTask = {
        id: uuidv4(),
        name: ev.target.name.value,
        items: [ev.target.items.value],
        // isEditing: false,
        // completed: false,
      }
      this.props.addTask(createdTask); //post request to db
    }
    else {
      let newValue = {};
      Object.assign(newValue, this.props.tasks, this.state);
      console.log('new val', newValue);
      // this.props.toggleEdit();
      this.props.addTask({...newValue}); //put request to db
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
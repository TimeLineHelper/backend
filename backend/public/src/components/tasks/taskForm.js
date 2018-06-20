import React, { Component } from 'react';
import uuidv4 from 'uuidv4';

export default class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      // begin: new Date(),
      // end: new Date(),
      isEditing: false,
      completed: false,
    };
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
        isEditing: false,
        completed: false,
      }
      this.props.addTask(createdTask); //post request to db
      // this.setState({
      //   name: '',
      //   begin: new Date(),
      //   end: new Date(),
      // })
    }
    else {
      let newValue = {};
      Object.assign(newValue, this.props.tasks, this.state);
      console.log('new val', newValue);
      this.props.toggleEdit();
      this.props.addTask({...newValue}); //put request to db
    }
  }

  render() { 
    return <form id="task-form" onSubmit={this.handleSubmit}>
      <input
        id="form-name"
        onChange={this.handleChange} 
        type='text'
        name='name'
        value={this.state.name}
        placeholder='Event Name'
      />
      <label for="date">Start Date:</label>
      <input 
        id="date"
        onChange={this.handleChange} 
        type='date'
        name='begin'
        placeholder='start date'
      />
      <label for="date">End Date:</label>
      <input 
        id="date"
        onChange={this.handleChange}
        type='date'
        name='end'
        placeholder='end date'
      />
      <button id="event-button" type='submit'>{this.props.buttonText === 'create' ? 'Submit' : 'Create Event'} </button>
    </form>;
  }
}

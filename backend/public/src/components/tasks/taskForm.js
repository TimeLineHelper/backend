import React, { Component } from 'react';
import uuidv4 from 'uuidv4';
// import User from '../../../../models/user.js';

export default class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      user: this.props.user,
      isEditing: false,
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
        elements: [],
        isEditing: false,
      }
      this.props.addTask(createdTask); //post request to db

    }
    else {
      let newValue = {};
      Object.assign(newValue, this.props.task);
      console.log('new val', newValue);
      console.log('this.props.task', this.props.task);
      newValue.name = ev.target.name.value;
      this.props.toggleEdit();
      console.log('this.props', this.props);
      this.props.updateTask(newValue, this.props.task.id); //put request to db
      // fetch(`/api/user/${this.props.user.email}`, {
      //   body: JSON.stringify({
      //     id: this.props.task.id,
      //     tasks: this.props.task,
      //   }),
      //   method: 'GET'
      // })

      //   .then(data => {
      //     console.log(data, 'this is data 53 taskform');
      //   })
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
      <button id="event-button" type='submit'>{this.props.buttonText === 'create' ? 'Submit Task' : 'Update Task'} </button>

      <label for="date">Start Date:</label>

      <input
        // id="date"
        onChange={this.handleChange}
        type='date'
        name='begin'
        placeholder='start date'
      />
      <label for="date">End Date:</label>
      <input
        // id="date" dont need date see alicia
        onChange={this.handleChange}
        type='date'
        name='end'
        placeholder='end date'
      />
    </form>;
  }
};

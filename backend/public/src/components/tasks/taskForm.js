import React, { Component } from 'react';

export default class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timestamp: new Date(),
      name: '',
      items: [],
      id: '',
      isEditing: false,
      completed: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(ev) {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  }

  handleSubmit(ev) {
    ev.preventDefault();
    this.props.addTask(this.state);
  }

  render() { 
    return <form 
      onSubmit={this.handleSubmit>
      <input onChange={this.handleChange} 
        name="name"
        type="text"
        placeholder="name"
        value={this.state.name}
      />
      <input onChange={this.handleChange} 
        name="items"
        type="text"
        placeholder="items"
        value={this.state.name}
      />
      <button type="submit"
        value="Add Task">New Task</button>
    </form>;
  }
}
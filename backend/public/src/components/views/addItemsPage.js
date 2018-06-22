import React, { Component, Fragment } from 'react';

// import TaskList from './tasks/taskList';
// import TaskForm from './tasks/taskForm';
import ElementForm from '../elements/elementForm.js';

export default class AddItemsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
    }
  }

  addTask = (task) => {
    console.log('task', task);
    let newTask = {};
    Object.assign(newTask, this.state);
    newTask.tasks.push(task);
    console.log('new Task', newTask);
    this.setState({ newTask });
  }

  removeTask = (id) => {
    let remainder = this.state.tasks.filter(task => {
      return task.id !== id;
    });
    this.setState({ tasks: remainder });
  }

  render() {
    return <Fragment>
      <div>
        <h1>{this.props.name}</h1>
        <p>Now add important dates and milestones to your event!</p>

        <ElementForm addTask={this.addTask} buttonText='create'></ElementForm>
        {/* <TaskForm addTask={this.addTask} buttonText='create'></TaskForm> */}
        {/* <TaskList tasks={this.state.tasks} removeTask={this.removeTask}></TaskList> */}
      </div>
    </Fragment>
  }
}
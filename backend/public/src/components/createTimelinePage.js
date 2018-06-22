import React, { Component, Fragment } from 'react';

import TaskForm from './tasks/taskForm.js';

export default class CreateTimelinePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [{
        name: 'Food',
        begin: new Date(),
        end: new Date(),
      }]
    };
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

  // event listener to hide (items) elements when rendering timeline component
  let 
  hideElements = (ev) => {
    ev.preventDefault();
    let hide = document.getElementById('hide');
    hide.timeline.remove('shrink');
  };

  render() {
    return <Fragment>
      <div>
          <p id="createItem-intro">Begin by creating an Event to Track!</p>
          <TaskForm addTask={this.addTask} buttonText='Create'></TaskForm>
      </div>
    </Fragment>
  }
}
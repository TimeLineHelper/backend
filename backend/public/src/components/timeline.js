import React, {Component} from 'react';

import TaskList from './tasks/taskList';
import TaskForm from './tasks/taskForm';

export default class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      begin: new Date(),
      tasks: [{
        // dailyTasks: [{
        name: 'Food',
        items: ['bacon', 'eggs'],
      }], 
        // weeklyTasks: [{
        //   name: '',
        //   items: [],
        // }],
        // monthlyTasks: [{
        //   name: '',
        //   items: [],
        // }],
        // milestones: {
        //   date: Date(),
        //   // Image: Image(),
        //   Alert: 'Congratulations!',
        // },
      // }],
      end: new Date(),
    };

    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  addTask = (task) => {
    console.log('task', task);
    let newTask = {};
    Object.assign(newTask, this.state);
    newTask.tasks.push(task);
    console.log('new Task', newTask);
    this.setState({newTask});
  }

  removeTask = (id) => {
    let remainder = this.state.tasks.filter(task => {
      return task.id !== id;
    });
    this.setState({tasks: remainder});
  }

  render() {
    return <div>
      <h1>Create Tasks to Reach Your Goal!</h1>
      <TaskForm addTask={this.addTask} buttonText='create'></TaskForm>
      <TaskList tasks={this.state.tasks} removeTask={this.removeTask}></TaskList>
    </div>;
  }
}
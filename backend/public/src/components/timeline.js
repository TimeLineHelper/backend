import React, {Component, Fragment} from 'react';

import TaskList from './tasks/taskList';
import TaskForm from './tasks/taskForm';

export default class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      begin: new Date(),
      dailyTasks: [{
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
      milestones: {
        date: Date(),
        // Image: Image(),
        Alert: 'Congratulations!',
      },
      end: new Date(),
    };

    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  addTask(task) {
    this.state.tasks.push(task);
    this.setState({tasks: this.state.tasks});
  }

  removeTask(id) {
    let remainder = this.state.tasks.filter(task => {
      return task.id !== id;
    });
    this.setState({tasks: remainder});
  }

  render() {
    return <Fragment>
      <TaskForm addTask={this.addTask} />
      <TaskList removeTask={this.removeTask} 
        dailyTasks={this.state.dailyTasks} />;
    </Fragment>;
  }
}
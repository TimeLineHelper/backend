import React, {Component} from 'react';

import TaskList from './tasks/taskList';
import TaskForm from './tasks/taskForm';

export default class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // begin: new Date(),
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
      // milestones: {
      //   date: Date(),
      //   // Image: Image(),
      //   Alert: 'Congratulations!',
      // },
      // end: new Date(),
    };

    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.editTask = this.editTask.bind(this);
  }

  addTask(task) {
    let newTask = {
      id: task.id,
      isEditing: false,
      completed: false,
      name: task.name,
      description: task.description
    };
    this.state.dailyTasks.push(newTask);
    this.setState({dailyTasks: this.state.dailyTasks});
  }

  removeTask(id) {
    let remainder = this.state.dailyTasks.filter(task => {
      return task.id !== id;
    });
    this.setState({dailyTasks: remainder});
  }

  render() {
    return <div>
      <h1>Create Tasks to Reach Your Goal!</h1>
      <TaskForm buttonText='create'></TaskForm>
      <TaskList></TaskList>
    </div>;
  }
}
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

    // this.addTask = this.addTask.bind(this);
    // this.removeTask = this.removeTask.bind(this);
  }

  // addTask = (task) => {
  //   let newTask = {
  //     id: task.id,
  //     isEditing: false,
  //     completed: false,
  //     name: task.name,
  //   };
  //   this.state.tasks.push(newTask);
  //   this.setState({tasks: this.state.tasks});
  // }

  // removeTask = (id) => {
  //   let remainder = this.state.tasks.filter(task => {
  //     return task.id !== id;
  //   });
  //   this.setState({tasks: remainder});
  // }

  render() {
    return <div>
      <h1>Create Tasks to Reach Your Goal!</h1>
      {/* <TaskForm buttonText='create'></TaskForm> */}
      <TaskForm></TaskForm>
      <TaskList tasks={this.state.tasks}></TaskList>
    </div>;
  }
}
import React, {Component} from 'react';
import TaskList from './tasks/taskList';
import TaskForm from './tasks/taskForm';

export default class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [{
        name: 'Food',
        begin: new Date(),
        end: new Date(),
        items: [
          {name: 'run', description: 'meet Andy at Greenlake'}
        ],
      }], 
    };
  }

  addTask = (task) => {
    console.log('task', task);
    let newTask = {};
    Object.assign(newTask, this.state);
    newTask.tasks.push(task);
    console.log('new Task', newTask);
    this.setState({newTask});
  }

  updateTask = () => {
    
  }

  removeTask = (id) => {
    let remainder = this.state.tasks.filter(task => {
      return task.id !== id;
    });
    this.setState({tasks: remainder});
  }

  render() {
    return <div className="create-timeline">
      <h1 id="page-title">Create Tasks to Reach Your Goal!</h1>
      <TaskForm 
        formClassName='primary-task-form'
        addTask={this.addTask} 
        buttonText='create'>
      </TaskForm>
      <TaskList tasks={this.state.tasks}
        addTask={this.addTask} 
        removeTask={this.removeTask}>
      </TaskList>
    </div>;
  }
}
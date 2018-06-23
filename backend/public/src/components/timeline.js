import React, { Component } from 'react';
import { getMaxListeners } from 'cluster';

import TaskList from './tasks/taskList';
import TaskForm from './tasks/taskForm';

export default class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // email: this.props.email, fix later
      gotUser:false,
      tasks:[],
      email: window.location.search.split('=')[1],
      user: null
    };
  }

  addTask = (task) => {
    console.log('ADDTASK=', task);
    let newUser = {};
    Object.assign(newUser, this.state.user);
    newUser.tasks.push(task);
    console.log('23 new user', newUser);
    fetch(`/api/user/${this.state.email}`, {body: JSON.stringify(newUser), method: 'PUT', headers: {
      'Content-Type':'application/json'
    }})
    .then(user => user.json())
    .then(user => {
      console.log('29 user after parsed', user);
      this.setState({user: user});
    })
  }

  updateTask = (newTask, id) => {
    let allTasks = [...this.state.tasks]; // loop for a matching id to the given id to find the right task
    allTasks.forEach(task => {
      if (task.id !== id) {
        task.name = newTask.name;
        task.begin = newTask.begin;
        task.end = newTask.end;
      }
    });
    this.setState({ tasks: allTasks });
  }

  removeTask = (id) => {
    let remainder = this.state.tasks.filter(task => {
      return task.id !== id;
    });
    this.setState({ tasks: remainder });
  }

  getUser = (email) => {
    fetch(`http://localhost:3000/api/user/${this.state.email}`)
      .then(user => user.json())
      .then(user => {
        console.log(user, 'this is user get 54');
        this.setState({user:user, gotUser:true});
        
      })

  }

  render() {
    if(!this.state.gotUser){
      this.getUser();
      return <h1>Loading user...</h1>
    }else{
    return <div className="create-timeline">
      <TaskForm
        onSubmit={this.handleSubmit}
        formClassName='primary-task-form'
        addTask={this.addTask}
        buttonText='create'
        user={this.state.user}>
      </TaskForm>
      <TaskList tasks={this.state.tasks}
        addTask={this.addTask}
        removeTask={this.removeTask}
        updateTask={this.updateTask}>
      </TaskList>
    </div>;
    }
  }
}
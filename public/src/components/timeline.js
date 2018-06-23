import React, { Component } from 'react';
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
  // addEvent = (event) => {
  //   console.log('event', event);
  //   this.setState({tasks: newTask.tasks});
  // }

  addTask = (task) => {
    console.log('task', task);
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
      this.setState({tasks: newUser.tasks});
    })
  }

  // this.setState({tasks: newUser.tasks});
//ix:TODO update and remove not working

  updateTask = (newTask, id) => {
    let tempUser = {};
    console.log('update task id', id)
    Object.assign(tempUser, this.state.user);
    let allTasks = [...tempUser.tasks]; // loop for a matching id to the given id to find the right task
    allTasks.forEach(task => {
      if (task.id === id) {
        task.name = newTask.name;
        task.itemName = newTask.itemName;
        task.description = newTask.description;
        task.startDate = newTask.startDate;
        task.endDate = newTask.endDate;
      }
    });
    tempUser.tasks = allTasks;
    this.setState({ user: tempUser });
  }

  removeTask = (id) => {
    let tempUser = {};
    console.log('remove task id', id)
    Object.assign(tempUser, this.state.user);
    console.log('user', this.state.user);
    let remainder = tempUser.tasks.filter(task => {
      console.log('task.id', task.id, 'id', id)
      if (task.id !== id) {
        return task;
      }
    });
    tempUser.tasks = remainder;
    console.log('remainder', remainder);
    this.setState({ user: tempUser });
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
      return <h1>loading user</h1>
    }else{
    return <div className="create-timeline">
      <h1 id="page-title">Create Tasks to Reach Your Goal!</h1>
      {/* <h2>{this.props.user.tasks.name}</h2> */}
      <TaskForm
        formClassName='primary-task-form'
        addTask={this.addTask}
        buttonText='create'
        user={this.state.user}>
      </TaskForm>
      <TaskList tasks={this.state.user.tasks}
        addTask={this.addTask}
        removeTask={this.removeTask}
        updateTask={this.updateTask}>
      </TaskList>
    </div>;
    }
  }
}
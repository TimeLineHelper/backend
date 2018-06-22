import React, { Component, Fragment } from 'react';

import TaskList from './tasks/taskList';
import TaskForm from './tasks/taskForm';

export default class DisplayTimelinePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [{
        name: '',
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

  render() {
    return <div>

      <section class="timeline">
        <h1>{this.props.tasks.name}</h1>
        <ul>
          <li>
            <div>
              <h3>Eat</h3>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium At vero eos et accusamus et iusto odio
              dignissimos ducimus qui blanditiis praesentium
              <button class="edit-btn"><i class="fa fa-pencil"></i></button>
              <button class="trash-btn"><i class="fa fa-close"></i></button>
            </div>
          </li>
          <li>
            <div>
              <h3>Run</h3>
              Proin quam velit, efficitur vel neque vitae, rhoncus commodo mi. Suspendisse finibus mauris et bibendum molestie. Aenean
              ex augue, varius et pulvinar in, pretium non nisi.
              <button class="edit-btn"><i class="fa fa-pencil"></i></button>
              <button class="trash-btn"><i class="fa fa-close"></i></button>
            </div>
          </li>
          <li>
            <div>
              <h3>Bike</h3>
              In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
              <button class="edit-btn"><i class="fa fa-pencil"></i></button>
              <button class="trash-btn"><i class="fa fa-close"></i></button>
            </div>
          </li>
        </ul>
      </section>

      <button class="add-btn"><i class="fa fa-plus-circle">Add Milestone</i></button>
      
      <TaskForm addTask={this.addTask} buttonText='create'></TaskForm>
      <TaskList tasks={this.state.tasks} removeTask={this.removeTask}></TaskList>
    </div>;
  }
}
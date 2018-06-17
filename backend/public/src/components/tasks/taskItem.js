import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';

import TaskForm from './taskForm';
// import Item from '../items/item';
// import ItemList from '../items/itemList';


export default class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: this.props.task,
      isEditing: false,
    };
    
    this.handleRemove = this.handleRemove.bind(this);
    // this.toggleEdit = this.toggleEdit.bind(this);
    // this.toggleOffEdit = this.toggleOffEdit.bind(this);
  }

  // toggleEdit = (ev) => {
  //   ev.preventDefault();
  //   this.setState({isEditing: !this.state.isEditing});
  // }

  // toggleOffEdit = (ev) => {
  //   ev.preventDefault();
  //   this.props.addTask({isEditing: false, id: this.props.task.id});
  // }

  handleRemove = (ev) => {
    ev.preventDefault();
    return this.props.removeTask(this.props.task.id);
  }

  renderList = () => {
    console.log('tasks.items', this.props);
    let items = this.props.task.items.map((item, i) => {
      return <li key={i}>{item}</li>
    })
    return items
  }

  render() {
    // if(this.state.isEditing === true) {
      return <div>
        <li>
          <p>Name: {this.props.task.name}</p>
          Items: <ol>{this.renderList()}</ol>
        </li>
        {/* <TaskForm></TaskForm> */}
        {/* <h2>Task List</h2> */}
        {/* <TaskForm name="update"
          name={this.props.task}
          toggleEdit={this.toggleEdit}> */}
        {/* </TaskForm> */}
        </div>
    // }
      // return
        // <li key={this.props.task.id} id={this.props.taskid}>
        //   {this.props.task.name}: ${this.props.task.items}
        // <button 
        //   id={this.props.task.id}
        //   onClick={this.toggleEdit}>
        //   Update
        // </button>
        // <h3>Add Task</h3>
        // <ItemForm taskId={this.props.task.id} buttonText='create' />
        // <ItemList taskId={this.props.task.id} />
        // </li>
    }
  }
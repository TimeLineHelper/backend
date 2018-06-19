import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';

import TaskForm from './taskForm';
// import ElementForm from '../elements/elementForm';
import ElementList from '../elements/elementList';
console.log('element list', ElementList)

export default class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: this.props.task,
      elements: [], // props
      isEditing: false,
    };
  }

  toggleEdit = (ev) => {
    ev.preventDefault();
    return this.setState({isEditing: !this.state.isEditing});
  }

  toggleOffEdit = (ev) => {
    ev.preventDefault();
    return this.props.addTask({isEditing: false, id: this.props.task.id});
  }

  handleRemove = (ev) => {
    ev.preventDefault();
    return this.props.removeTask(this.props.task.id);
  }

  addElement = (element) => {
    console.log('element', element);
    let newElements = [...this.state.elements];
    newElements.push(element);
    console.log('new Task', newElement);
    this.setState({elements: newElements});
  }

  removeElement = (id) => {
    let remainder = this.state.elements.filter(element => {
      return element.id !== id;
    });
    this.setState({elements: remainder});
  }

  renderList = () => {
    console.log('tasks.items', this.props);
    let items = this.props.task.items.map((item, i) => {
      return <li key={i}>{item.name}{item.description}</li>
    })
    return items
  }

  render() {
    if(this.state.isEditing === true) {
      return <div>
        <li>
          <p>Name: {this.props.task.name}</p>
          Items: <ol>{this.renderList()}</ol>
        </li>
        <TaskForm name="update"
          name={this.props.task}
          toggleEdit={this.toggleEdit}>
        </TaskForm>
        </div>
    }
      return <li 
          key={this.props.task.id} id={this.props.taskId}>
          {this.props.task.name}: <ul>{this.renderList()}</ul>
        <button 
          id={this.props.task.id}
          onClick={this.toggleEdit}>
          Update
        </button>
        <h3>Add Task</h3>
        {/* <ElementForm addElement={this.state.addElement} buttonText='create' /> */}
        <ElementList elements={this.state.elements} 
          removeElement={this.state.removeElement}/>
        </li>
    }
  }
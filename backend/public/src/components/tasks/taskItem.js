import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';

import TaskForm from './taskForm';
import ElementForm from '../elements/elementForm';
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
    return this.setState({isEditing: !this.state.isEditing});
  }

  // toggleOffEdit = (ev) => {
  //   return this.props.addTask({isEditing: false, id: this.props.task.id});
  // }

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
    console.log('this.props.task', this.props.task);
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
          <TaskForm buttonText="update"
          task={this.props.task}
          toggleEdit={this.toggleEdit}
          addTask={this.props.addTask}>
        </TaskForm>
        Items: <ol>{this.renderList()}</ol>
        </li>
        </div>
    }
      return <div>
        <button
          id={this.props.task.id}
          onClick={this.handleRemove}>
          Delete
        </button>
        <button 
          id={this.props.task.id}
          onClick={this.toggleEdit}>
          Update
        </button>
        <li key={this.props.task.id} id={this.props.taskId}>
          {this.props.task.name}: <ul>{this.renderList()}</ul>
        </li>
        <h3>Add Items:</h3>
        <ElementForm addElement={this.state.addElement} buttonText='create' />
        <ElementList elements={this.state.elements} 
          removeElement={this.state.removeElement}/>
        </div>
    }
  }
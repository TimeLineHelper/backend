import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';

import TaskForm from './taskForm';
import ElementForm from '../elements/elementForm';
import ElementList from '../elements/elementList';

export default class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: this.props.task,
      isEditing: false,
    };
  }

  toggleEdit = (ev) => {
    return this.setState({isEditing: !this.state.isEditing});
  }

  handleRemove = (ev) => {
    ev.preventDefault();
    return this.props.removeTask(this.props.task.id);
  }

  addElement = (element) => {
    console.log('element', element);
    let newElements = [...this.state.task.elements];
    newElements.push(element);
    let tempTask = {};
    Object.assign(tempTask, this.state.task);
    tempTask.elements = newElements;
    console.log('new elements', newElements);
    this.setState({elements: newElements, task: tempTask}); //individual task updated on this component need to update top level
    this.props.updateTask(tempTask, tempTask.id);
  }

  updateElement = (newElement, id) => { 
    let allElements = [...this.state.task.elements]; // loop for a matching id to the given id to find the right element
    allElements.forEach(element => {
      if (element.id !== id) {
        element.name = newElement.name;
        element.begin = newElement.begin;
        element.end = newElement.end;
      }
    });
    this.setState({ elements: allElements });
  }

  removeElement = (id) => {
    let remainder = this.state.elements.filter(element => {
      return element.id !== id;
    });
    this.setState({elements: remainder});
  }

  renderList = () => {
    console.log('this.props.task', this.props.task);
    let elements = this.props.task.elements.map((item, i) => {
      return <li key={i}>{item.name}{item.description}</li>
    })
    return elements;
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
        {/* <h3>Add Items:</h3> */}
        {/* <ElementForm addElement={this.addElement} buttonText='create' />
        <ElementList elements={this.state.elements} 
          removeElement={this.state.removeElement}/> */}
        </div>
    }
  }
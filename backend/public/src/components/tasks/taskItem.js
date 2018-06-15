import React, {Component, Fragment} from 'react';

export default class TaskItem extends Component {
  constructor(props) {
    super(props);
    
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove(ev) {
    return this.props.removeTask(this.props.task.id);
  }

  render() {
    return <Fragment>
      <h2>{this.props.task.name}</h2>
      <h3>{this.props.task.items}</h3>
      <button 
        onClick={this.handleRemove}>
        Remove
      </button>
    </Fragment>;
  }
}
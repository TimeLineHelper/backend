import React, { Component } from 'react';

import TaskItem from './taskItem';
import Timeline from '../timeline';

export default class TaskList extends Component {
  constructor(props) {
    super(props);

    this.compileList = this.compileList.bind(this);
  }

  compileList = () => {
    console.log('props', this.props.tasks)
    return <ul>
        {this.props.tasks.map(task => (
          <TaskItem 
            removeTask={this.props.removeTask}
            updateTask={this.props.updateTask}
            task={task} key={task.id} index={task.isEditing}
          />
      ))}
    </ul>
  }

  render() {
    return <div>
      <ul>
        <h2>
          Task List:
        </h2>
        {this.compileList()}
      </ul>
    </div>;
  }
}
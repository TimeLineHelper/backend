import React, { Component } from 'react';

import TaskItem from './taskItem';
import Timeline from '../views/displayTimelinePage.js';

export default class TaskList extends Component {
  constructor(props) {
    super(props);
  }

  compileList = () => {
    console.log('props', this.props.tasks)
    return <ul>
      {this.props.tasks.map((task, i) => (
        <TaskItem
          removeTask={this.props.removeTask}
          addTask={this.props.addTask}
          updateTask={this.props.updateTask}
          task={task} key={i} index={task.isEditing}
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
import React, { Component } from 'react';

import TaskItem from './tasks/taskItem';

export default class TaskList extends Component {
  constructor(props) {
    super(props);

    this.compileList = this.compileList.bind(this);
  }

  compileList() {
    return this.props.tasks.map((task, index) => {
      return <TaskItem removeTask={this.props.removeTask}
        task={task} key={task.id} index={index} />;
    });
  }

  render() {
    return <div>
      <ul>
        {this.compileList()}
      </ul>
    </div>;
  }
}
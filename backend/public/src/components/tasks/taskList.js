import React, { Component } from 'react';

import TaskItem from './tasks/taskItem';

export default class TaskList extends Component {
  constructor(props) {
    super(props);

    this.compileList = this.compileList.bind(this);
  }

  compileList() {
    return this.props.dailyTasks.map(task => {
      return <TaskItem 
        removeTask={this.props.removeTask}
        addTask={this.props.addTask}
        task={task} key={task.id} index={task.isEditing}>
      </TaskItem>;
    })
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
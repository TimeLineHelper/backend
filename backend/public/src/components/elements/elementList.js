import React, {Component} from 'react';

import Element from './element';

export default class ElementList extends Component {
  constructor(props) {
    super(props);

  }

  displayAllElements = () => {
    console.log('props', this.props.elements)
    return this.props.elements.map(element => {
      return <Element
        taskId={this.props.taskId}
        key={element.id}
        id={element.id}
        element={element}
        removeElement={this.props.removeElement}
        addElement={this.props.addElement}
        toggleEdit={item.toggleEdit}
      />;
    });
  }

  render() {
    return <div>
      <ul>{this.displayAllElements()}</ul>
    </div>;
  }
}
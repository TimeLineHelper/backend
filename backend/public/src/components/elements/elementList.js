import React, {Component} from 'react';

import Element from './element';

export default class ElementList extends Component {
  constructor(props) {
    super(props);

  }

  displayAllElements = () => {
    console.log('this.props.elements', this.props.elements)
    return this.props.elements.map((element, i) => {
      return <Element
        taskId={this.props.taskId}
        key={i}
        id={element.id}
        element={element}
        removeElement={this.props.removeElement}
        addElement={this.props.addElement}
        toggleEdit={this.toggleEdit}
      />;
    });
  }

  render() {
    return <div>
      <ul>{this.displayAllElements()}</ul>
    </div>;
  }
}
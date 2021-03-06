import React, {Component} from 'react';

import Element from './element';

export default class ElementList extends Component {
  constructor(props) {
    super(props);

  }

  displayAllElements = () => {
    console.log('this.props.task.elements', this.props.task.elements)
    return this.props.task.elements.map((element, i) => {
      return <Element
        id={this.props.id}
        key={i}
        id={element.id}
        element={element}
        removeElement={this.props.removeElement}
        updateElement={this.props.updateElement}
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
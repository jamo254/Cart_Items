import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
    // tags: []
  };

  // renderTags(){
  //   if (this.state.tags.length === 0) return <p>There are no tags!</p>

  //   return <ul>
  //   {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
  // </ul>
  // }

  //binding a handler
  // constructor() {
  //    super();
  //    this.handleIncrement = this.handleIncrement.bind(this);
  //  }

  handleIncrement = (product = 0) => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    // this.getBadgeClasses();
    console.log("props", this.props);
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* {this.state.tags.length === 0 && "Please add a tag"}
        {this.renderTags()} */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2  badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;

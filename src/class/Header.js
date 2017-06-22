import React, { Component } from 'react';

class Header extends Component {

  render() {
    let {addVal,changeVal,addData} =this.props;
    
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          type="text"
          className="new-todo"
          placeholder="What needs to be done?"
          value={addVal}
          onChange={changeVal}
          onKeyUp={addData}
        />
      </header>
    );
  }
}


export default Header;
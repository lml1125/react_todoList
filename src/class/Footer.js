import React, { Component } from 'react';

class Footer extends Component {

  render() {
    let {todoLen,datalen,clearData,changeView,view} = this.props;
    let clearbtn= null;
   
    if(datalen > todoLen){
    	clearbtn = (<button className="clear-completed" onClick={clearData}>clear completed</button>)
    }
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{todoLen}</strong>
          {' '}
          item
          {' '}
          left
        </span>
        <ul className="filters">
          <li>
            <a href="#/" className={view=="all"?'selected':''}
            onClick={()=>{
            	changeView("all")
            }}
            >All</a>
          </li>
          <li>
            <a href="#/active" className={view=="active"?'selected':''}
            onClick={()=>{
            	changeView("active")
            }}
            >Active</a>
          </li>
          <li>
            <a href="#/completed" className={view=='completed'?'selected':''}
            onClick={()=>{
            	changeView("completed")
            }}
            >completed</a>
          </li>
        </ul>
        {clearbtn}
      </footer>
    );
  }
}


export default Footer;
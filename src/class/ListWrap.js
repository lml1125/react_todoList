import React, { Component } from 'react';

import ListItem from './ListItem.js';



class ListWrap extends Component {
  render() {
  	 let {todoData,ChekedTrueFalse,deleteData,checkAll,todoLen,saveData} = this.props;

  	 let listHtml = todoData.map((item)=>{
         return(
           	<ListItem  
           	  key={item.id}
           	  todoData={item} 
           	  ChekedTrueFalse={ChekedTrueFalse}
           	  deleteData={deleteData}
           	  saveData={saveData}
           	/>
         )  
  	 })
    return (
      <section className="main">
        <input
          type="checkbox"
          className="toggle-all"
          checked ={todoLen===0?true:false}
          onClick={checkAll}
        />
        <ul className="todo-list">
         {listHtml}
        </ul>
      </section>
    );
  }
}



export default ListWrap;
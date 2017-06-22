import React, { Component } from 'react';

class ListItem extends Component {
  constructor(props){
  	super(props);
  	let {todoData} = this.props;
    let {text} = todoData;
  	this.state={
  		classItme:false,
  		atext:text
  	}
  	this.showInput =this.showInput.bind(this);
  	this.changeText =this.changeText.bind(this);
  	this.blurfn = this.blurfn.bind(this);
  	this.ok =this.ok.bind(this);
  }
  ok(e){
  	 if(e.keyCode !==13)return
  	 this.blurfn(e);
  }
  blurfn(e){
  	let {todoData,saveData} = this.props;
  	
  	saveData(todoData,e.target.value)
  	
  	this.setState({
  		classItme:false,
  		atext:e.target.value
  	})
  }
  changeText(e){
  	this.setState({
  		atext:e.target.value
  	})
  }
  showInput(){
  	this.setState({
  		classItme:true
  		
  	})
  }
  render() {
    let {todoData,ChekedTrueFalse,deleteData,saveData} = this.props;
    let {id,text,done} = todoData;
    let {classItme,atext} =this.state;
    let {showInput,changeText,blurfn,ok} =this;
    let cls = " "
    
    if(done){
    	cls+=' completed'
    }
    if(classItme) cls +='editing';
    return (
      <li className={cls.trim()}>
        <div className="view">
          <input type="checkbox" className="toggle"
           checked={done}
           onChange={()=>{
           	ChekedTrueFalse(todoData)
           }}
          />
          
          <label onDoubleClick={showInput}>{text}</label>
          <button className="destroy" 
	          onClick={()=>{
	          	deleteData(todoData)
	          }}
          />
        </div>
        <input
         type="text" className="edit"
         value={atext}
         onChange={changeText}
         onBlur={blurfn}
         onKeyDown={ok}
         />
      </li>
    );
  }
}



export default ListItem;
import React, { Component } from 'react';

import '../assets/style/base.css';
import '../assets/style/index.css';

import Header from './Header.js';
import ListWrap from './ListWrap.js';
import Footer from './Footer.js';

class Todos extends Component {
  constructor(props){
  	 super(props);
  	 this.state = {
  	 	   todoData:[
	  	 	   
  	 	   ],
  	 	   addVal:'',
  	 	   view:'all'
  	 }
  	 this.ChekedTrueFalse= this.ChekedTrueFalse.bind(this);
  	 this.deleteData =this.deleteData.bind(this);
  	 this.changeVal =this.changeVal.bind(this);
  	 this.addData=this.addData.bind(this);
  	 this.checkAll = this.checkAll.bind(this);
  	 this.clearData =this.clearData.bind(this);
  	 this.changeView =this.changeView.bind(this);
  	 this.saveData =this.saveData.bind(this);
  }
  //保存修改的值
  saveData(data,newtext){
  	let {todoData} = this.state;
  	todoData = todoData.map((item)=>{
  		if(item.id == data.id){
  			 item.text = newtext;
  		}
  		 return item;  
  	})
  	this.setState({todoData})
  }
  //修改视图
  changeView(view){
  	this.setState({view})
  }
  //清除选中的数据
  clearData(){
  	 let {todoData} = this.state;
  	 todoData = todoData.filter((item)=>{
  	 	     return !item.done;
  	 })
  	 this.setState({todoData})
  }
  //全选
  checkAll(e){
  	 let {todoData} =this.state;
  	 todoData = todoData.map((item)=>{
  	 	    item.done = e.target.checked;
  	 	    return item;
  	 })
  	 this.setState({todoData})
  }
  //添加数据
  addData(e){
  	 let {todoData,addVal} =this.state;
  	 if(e.keyCode!==13) return;
  	 if(!(addVal=addVal.trim())) return;
  	
  	 todoData.push({
  	 	 id:Date.now(),
  	 	 text:addVal,
  	 	 done:false
  	 });
  	 this.setState({
  	 	  todoData,
  	 	  addVal:""
  	 })
  }
  //
  changeVal(e){
  	this.setState({
  		addVal:e.target.value
  	})
  }
  //删除一条数据
  deleteData(curItem){
  	let {todoData} =this.state;
  	todoData = todoData.filter((item)=>{
  		 if(curItem.id !== item.id){
  		 	 return item;
  		 }
  	})
  	this.setState({todoData})
  }
  //选中不选中
  ChekedTrueFalse(curItem){
  	let {todoData} =this.state;
  	todoData = todoData.map((item)=>{
  		  if(item.id === curItem.id){
  		  	 item.done = !item.done;
  		  }
  		  return item;
  	})
  	
  	this.setState({todoData})
  	
  }
  render() {
  	let  {todoData,addVal,view} = this.state;
  	let  {ChekedTrueFalse,deleteData,changeVal,addData,checkAll,clearData,changeView,saveData} = this;

  	let  todoLen = todoData.length;
  	let datalen = todoData.length;
	  	todoData = todoData.filter((item)=>{
	  		 if(item.done){
	  		 	 todoLen--;
	  		 }
	  		 
	  		 switch (view){
	  		 	case "all":
	  		 	  return true
	  		 		break;
	  		 	case "active":
	  		 	  console.log(item.done);
	  		 	  return  !item.done
	  		 		break;
	  		 	case "completed":
	  		 	  console.log(item.done);
	  		 	  return item.done
	  		 		break;
	  		 }
	  	})

   

   let [wrap,footer] =[null,null]
   if(datalen){
   	wrap=(<ListWrap  todoData={todoData} ChekedTrueFalse={ChekedTrueFalse} 
                deleteData={deleteData} checkAll={checkAll}
                todoLen={todoLen}  saveData={saveData}
          />)
   	footer=(<Footer todoLen={todoLen} datalen={datalen} clearData={clearData} changeView={changeView} view={view}/>)
   }
	  	
    return (
      <div className="todoapp">
        <Header addVal={addVal} changeVal={changeVal} addData={addData} />
	     {wrap}
	     {footer}
      </div>
    );
  }

}

export default Todos;
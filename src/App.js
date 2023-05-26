import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
class App extends Component{
  constructor(){
    super()
    this.state={
     count:0,
      id:null,
      item:"",
      mrp:"",
      rating:"",
      price:"",
      button:""
    }
    
  }
  increaseCount=()=>{
    const state=this.state
    state.count=state.count+1
    this.setState(state)
    
  }

  decreaseCount=()=>{
    const remove=this.state
    remove.count=remove.count-1
    this.setState(remove)
  }
 
  render(){
    return(
      <div>
       
      <BrowserRouter>
      
       <Routes> 
        <Route 
        exact
        path='/'
        element={<Home increaseCount={this.increaseCount} count={this.state.count} decreaseCount={this.decreaseCount}/>}
        ></Route>
        </Routes>  
    </BrowserRouter> 
        
      </div>
    
    )
  }
}
export default App



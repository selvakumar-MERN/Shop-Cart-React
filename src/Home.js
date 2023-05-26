import React, { Component } from 'react';
import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';

class Home extends Component{
  constructor(){
    super()
    this.state={Data:[{
      id:0,
      item:"Fancy Product",
      mrp:"",
      price:"$40.00-$80.00",
      rating:"",
      button:"Add to Cart",
      value:true
    },
    {
      
      id:1,
      item:"Special Item",
      mrp:"$20.00",
      rating:[1,2,3,4,5],
      price:"$18.00",
      button:"Add to Cart",
      value:true
    },
    {
      id:2,
      item:"Sale Item",
      mrp:"$50.00",
      rating:"",
      price:"$25.00",
      button:"Add to Cart",
      value:true
    },
    {
      id:3,
      item:"Popular Item",
      mrp:"",
      rating:[1,2,3,4,5],
      price:"$40.00",
      button:"Add to Cart",
      value:true
    },
    {
      id:4,
      item:"Sale Item",
      mrp:"$50.00",
      rating:"",
      price:"$25.00",
      button:"Add to Cart",
      value:true
    },
    {
      id:5,
      item:"Fancy Product",
      mrp:"",
      rating:"",
      price:"$120.00-$180",
      button:"Add to Cart",
      value:true
    },
    {
      id:6,
      item:"Special Item",
      mrp:"$20.00",
      rating:[1,2,3,4,5],
      price:"$18.00",
      button:"Add to Cart",
      value:true
    },
    {
      id:7,
      item:"Popular Item",
      mrp:"",
      rating:[1,2,3,4,5],
      price:"$40.00",
      button:"Add to Cart",
      value:true
    },
  ]}
  } 

  addItems=(id)=>{
    const i = this.state.Data.map((items)=>{
    return items
   })
     i[id].value=false
      this.setState(i)
  }
  removeItems=(id)=>{
  const i = this.state.Data.map((items)=>{
     return items
    })
    i[id].value=true
    this.setState(i)
   }
 
  
  render(){
 return(
      <div>
          
          <Menu count={this.props.count}/>
          <Header/>
          <Body appData={this.state.Data}  increaseCount={this.props.increaseCount} decreaseCount={this.props.decreaseCount} addItems={this.addItems} removeItems={this.removeItems} />
          <Footer/>
      </div>
    
    )
  }
}
export default Home



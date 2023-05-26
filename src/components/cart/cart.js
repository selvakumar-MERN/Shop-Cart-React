import React, { Component } from "react";
import "./cart.css"

class Cart extends Component{
   render(){
       const Default=(e)=>{
          e.preventDefault()
       } 
       const count=this.props.count
        return(
            <div>
            <form className="d-flex" >
               
                            <button onClick={Default} className="btn btn-outline-dark" type="submit">
                           
                             <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                            Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill ">{count}</span> 
                        </button>
                        
                    </form>
                    </div>
        )
    }
}
export default Cart;
import React, { Component } from "react";
import "./Menu.css"
import Cart from "../cart/cart";
import { Link } from "react-router-dom";
import Home from "../../Home";
class Menu extends Component{
    render(){
        return(
          
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              
                <div className="container px-4 px-lg-5">
                   <a className="navbar-brand" href="/">My Shop</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse navbaritems" id="navbarSupportedContent">
                         <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                            <li className="nav-item">
                              <a className="nav-link active" aria-current="page" href="/">Home </a>
                            </li>
                            <Link to="/aboutus" className="text-decoration-none">
                            <li className="nav-item ">
                             
                              <a className="nav-link " href="/">{this.props.name}</a>
                              
                            </li>
                            </Link>
                            <li className="nav-item dropdown">
                              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                                 <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                   <li><a className="dropdown-item" href="/">All Products</a></li>
                                   <li><div className="dropdown-divider"></div></li>
                                   <li><a className="dropdown-item" href="/">Popular Items</a></li>
                                   <li><a className="dropdown-item" href="/">New Arrivals</a></li>
                                 </ul>
                            </li>
                        </ul>
                        <Cart count={this.props.count}></Cart>
                    </div>
                </div>
           </nav>
        )
    }
}
export default Menu;
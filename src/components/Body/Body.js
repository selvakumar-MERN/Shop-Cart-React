import React, { Component } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class Body extends Component{
    
 render(){
    const notify = () => toast("Added to Cart!");
        const priceData=this.props.appData 
        
                 
        return(
            <section className="py-5"><ToastContainer />
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                
                  {priceData.map((items)=>{
                    return (
                        <div key={items.id} className="col mb-5">
                        <div className="card h-100">
                           {/*Product image*/} 
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..."></img>
                            { /*Product details*/}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/*Product name*/}
                                    <h5 className="fw-bolder">{items.item}</h5>
                                     {/*Product price*/}
                                     
                                        {items.id===1||items.id===3||items.id===6||items.id===7?(
                                            <div class="d-flex justify-content-center small text-warning mb-2">
                                                  {items.rating.map((items)=>{
                                                     return(
                                                   <div class="bi-star-fill"></div>
                                                     )
                                          
                                               })

                                               }
                                            </div>
                                        ):(
                                            null
                                        )}
                                          
                                    <div className="text-decoration-line-through"> {items.mrp}</div>
                                    {items.price}
                                </div>
                            </div>
                             {/*Product actions*/}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent" >
                                {items.value ?(
                                <div className="text-center" ><button  className="btn btn-outline-dark mt-auto" onClick={()=>{this.props.increaseCount();notify();this.props.addItems(items.id);}} 
                                >{items.button}</button></div>):
                                (<div className="text-center" > <button 
                                className="btn btn-outline-dark mt-auto"  onClick={()=>{this.props.decreaseCount();this.props.removeItems(items.id)}} >Remove from Cart</button></div>)}
                                </div> 
                                
                                        
                        </div>
                    </div>
                    )
                  })
               
                  }              
                        </div>
                    </div>
                  
                   
        </section> 
       
        )
    
    }
}
export default Body;
import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';

 
const AllProducts=()=>{
  let ProductA_url="";  
  let ProductB_url=""; 
  let ProductC_url=""; 
  let ProductD_url=""; 
    
  let Products=
    [
      {id:1,product_name:"A",price:10},
      {id:2,product_name:"B",price:15},
      {id:3,product_name:"C",price:40},
      {id:4,product_name:"D",price:55}
    ]
   return Products;
}
 

export default AllProducts;
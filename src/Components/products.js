import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import '../App.css';

const ProductsItem=(props)=>{
    return(
    <div className='item-div' onClick={props.action}>
      <img src={props.src} />  
      <p>{`Price:${props.price}`}</p>
     <p>{`name:${props.name}`}</p>
     </div>
    )
}
export default ProductsItem;
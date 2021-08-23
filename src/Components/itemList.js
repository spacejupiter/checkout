import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import '../App.css';

const ItemList=(props)=>{
    return(
    <div className='item-div-list' onClick={props.action}> 
      <p>{`Item Added:${props.name}`}</p>
     <p>{`Amount :${props.price}`}</p>
     
     </div>
    )
}
export default ItemList;
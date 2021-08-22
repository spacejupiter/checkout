import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
var basket =new Array();
const AddBasket=(item)=>{
    basket.push(item);
    return(basket.length());
}
export default AddBasket;
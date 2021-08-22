import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import Header  from './header';
import Search from './searchpanel';
import Products from './products';
import Allproduct from '../functions/products';
import '../App.css';
import AddBasket from '../functions/basket';

const Click=(id,e)=>{
 const index=Allproduct().findIndex(product=>{return product.id===id})  ; 
    const newProduct=Object.assign([],Allproduct());
    console.log(newProduct[index].price);
} 

const  Allproducts=Allproduct().map((item,index)=>{
   return ( <Products key={item.id} price={item.price} name={item.product_name} action={Click.bind(this,item.id)} />);
});
   



function ShoppingPage(props){
    return(
        <div className={"container-div"}>
        <Header />
        <Search />
      <div className="products-container">  {Allproducts } </div>
        </div>
    );
    
    
}
export default ShoppingPage;
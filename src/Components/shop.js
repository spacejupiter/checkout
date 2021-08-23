import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import Header  from './header';
import Search from './searchpanel';
import Products from './products';
import Allproduct from '../functions/products';
import '../App.css';
import AddBasket from '../functions/basket';
import ItemList from './itemList';
class Shopping extends React.Component{
    constructor(props){
        super();
        this.state={
        basket:[] ,
        }
    }
    
    Click=(id,e)=>{
    let AddBasketItem=AddBasket;
  
    const index=Allproduct().findIndex(product=>{return product.id===id});
    
    const newProduct=Object.assign([],Allproduct());
    
    let  AddedProducts={price:newProduct[index].price,name:newProduct[index].product_name}
    this.setState({basket:AddBasketItem(AddedProducts)})
  console.log  (this.state.basket);
    
    
} 
     Allproducts=Allproduct().map((item,index)=>{
    
           return ( <Products key={item.id} price={item.price} 
           name={item.product_name} action={this.Click.bind(this,item.id)} />);
});

Allitems= ()=>{
    if (this.state.basket===0){return 0;}
     else{
   var  Allitems=this.state.basket.forEach(item=>{
       return(<ItemList name={item.name} />) ;
   })
   
     }   
   return Allitems;
    }
   
Total=()=>{
    var BTotal=0; //variable for the total price of b items
    var NilTotal=0; // variable for total amount of items that != b or d
    var Bcount=0// number of b items in the list
    var Dcount=0;// numnber of d items in the list
    var TotalAmount=0;// totaamount when discounts are added
    var DTotal=0;//total amount of D items  in the  basket
    var Bprice=15;
    var Dprice=55;
    if (this.state.basket.length===0){
        return (0)
      }
    else{
        
      this.state.basket.forEach(item=>{
      if(!(item.name==="B" || item.name ==="D")){
         NilTotal=NilTotal+item.price;
      }
      else if(item.name==="B"){
       Bcount=Bcount+1;  
      }
      else if(item.name==="D"){
      Dcount=Dcount+1
      }
  }) }
  BTotal=Math.floor(Bcount/2)*0.25*(Bcount*Bprice)+(Bcount%2*Bprice);// 25% discount
  
  DTotal=Math.floor(Dcount/3)*40 +(Dcount%3)*Dprice//discount of 40 for every multiple of item D
    TotalAmount=NilTotal+BTotal+DTotal;
return (TotalAmount);
}
 
    
    render(){
        return(
        <div className={"container-div"}>
        <Header amount={this.state.basket.length} />
        <Search />
            <h1>{this.Total()}</h1>
      <div className="products-container">  {this.Allproducts } </div>
       <button className={"checkout"}> checkout</button>
        <div className={'item-list-div'}>
            
            </div>
        </div>
    );
     
    }
}





 



export default Shopping;
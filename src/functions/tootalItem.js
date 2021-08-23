import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
 
const Total=(ItemArray,Itemname,price)=>{
    let NilTotal=0;
    let BTotal=0;
    let DTotal=0;
    let Bcount=0;
    let Dcount=0;
  ItemArray.forEach(item=>{
      if(Itemname!=="B" || Itemname !=="D"){
          NilTotal+=price;
      }
      else if(Itemname==="B"){
        Bcount++  
      }
      else if(Itemname==="D"){
         Dcount++ 
      }
  }) 
    BTotal=(Bcount*40)- (Bcount/2)*0.25*(Bcount*40)+(Bcount%2*40);
    Dtotal=((Dcount/3)*40)+(Dtotal%3)
}
export default Total;
import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';

import '../App.css';
import bag from '../assets/bag.svg'
function Header(props){
    return(
        <div className={'header'}>
        
        <li>
            <ul>
        
               <div className={'app-logo'}>
                   <img className={''}src={""} />
                    <p></p>
                    </div>
                       </ul>
                  <ul> <p>Shop</p></ul>
        
                 <ul>
                    <div className={'bag'}>  
                     <p className={'bag-amount'}>{props.amount}</p>
                      <img className={'ibag'}   src={bag} />
                  
                   </div>
               </ul>
           </li>
    
        </div>
    );
    
}
export default Header;
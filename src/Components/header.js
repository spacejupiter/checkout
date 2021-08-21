import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';

import '../App.css';

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
   
                     <p>Bag</p>
                      <img />
                  
                   </div>
               </ul>
           </li>
    
        </div>
    );
    
}
export default Header;
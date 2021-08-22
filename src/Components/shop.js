import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import Header  from './header';
import Search from './searchpanel'

function ShoppingPage(props){
    return(
        <div className={"container-div"}>
        <Header />
        <Search />
        </div>
    );
    
    
}
export default ShoppingPage;
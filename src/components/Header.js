import React from 'react';
import { Link } from 'react-router-dom';
class Header extends React.Component{
    
    constructor(){
        super();        
        this.state = {
            bookstoreName : "Bookstore",
        }
    }
      
    render(){
        
        
        return (
            <div className = "header container">
                <h1>{this.state.bookstoreName}</h1>
                <Link to="/admin" className="link">Go to admin panel </Link>
            </div>
            )
    }
    
}


export default Header;
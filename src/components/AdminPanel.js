import React from 'react';
import LoginPanel from './LoginPanel';
import {fbase} from '../fbase';
import AddBookForm from './AddBookForm';
import AdminBookListing from './AdminBookListing'
class AdminPanel extends React.Component{
    
    constructor(){
        super();
        this.state={
            books : [],
            loggedIn : false
        }
    }
    componentDidMount(){
        this.ref = fbase.syncState('bookstore/books',{
             context: this,
             state: 'books'
         });
     }
     componentWillUnmount(){
         fbase.removeBinding(this.ref);
     }
     

addNewBook = (book) => this.setState({ books : [...this.state.books, book]})
changeLoggedIn = (newValue) => this.setState({loggedIn: newValue})
    render(){
        return (
    <div className="login text-center">
        <div className="row">
            {!this.state.loggedIn &&
                <LoginPanel changeLoggedIn={this.changeLoggedIn} />
            }
            {this.state.loggedIn &&
            <React.Fragment>
                <AddBookForm addNewBook={this.addNewBook} />
                <AdminBookListing books={this.state.books} />
            </React.Fragment>
            }
            </div> 
         </div>
        )
            
    }
}

export default AdminPanel;
import React from 'react';

class AdminBookListing extends React.Component{
    render(){

        let list;

        if(this.props.books) {
            list = <div className="col-md-8 adminList"><ul>{this.props.books.map((book) => 
            <li><p>{book.name} {book.author}</p></li>)}</ul></div>
        }else {
            list = <div>No books in state</div>
        }
        return(
        <div>
            {list}
        </div>
        )
    }
}
export default AdminBookListing
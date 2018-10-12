import React from 'react';

export default class BookView extends React.Component{
    
    render(){
        return(
            <div className="singleBook row">
                <div className="col-sm-3">
               <img width="100px" src={this.props.book.image} alt={this.props.book.image} ></img>
            </div>
            <div className="col-sm-6">
                <b>{this.props.book.name}</b><br />
                <i>{this.props.book.author}</i><br />
                <i>{this.props.book.genre}</i>
                <p>{this.props.book.description}</p>
            </div>
            <div className="col-sm-3">
                <button className="btn btn-dark" onClick={ (event) => this.props.addToOrder(this.props.book)}>Add to order</button>
            </div>
            </div>
        )
    }
}
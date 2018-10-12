import React from 'react';

export default class OrderView extends React.Component{
    
    render(){
        return(
            <div className = "orderView row">
            <div className="col-md-3">
               <img width="100px" src={this.props.book.image} alt={this.props.book.image} ></img>
            </div>
            <div className="col-md-5">
                <b>{this.props.book.name}</b><br/>
                <i>{this.props.book.author}</i>
            </div>
            <div className="col-md-3">
                <button className="btn btn-danger" onClick={ (event) => this.props.removeFromOrder(this.props.book.name)}>remove from order</button>
            </div>
            </div>
        )
    }
}
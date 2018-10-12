import React from 'react';
import OrderView from './OrderView';

class Order extends React.Component {
    
    render(){
        
        let orderedBooks = this.props.order.map( order => {
            return <OrderView book={order} removeFromOrder={this.props.removeFromOrder} />
        })
        return (
        <div className="order  col-md-6">
            <h4>Order</h4>
            {orderedBooks}
        </div>    
        )
    }
    
}

export default Order;
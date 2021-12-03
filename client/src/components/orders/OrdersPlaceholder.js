import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { dateFormatBR } from './dateFormat';

class OrdersPlaceholder extends React.Component {
  componentDidMount() {
    this.props.orderPlaceholder();
  }
  renderOrderPlaceholder() {
    if (this.props.orders.order_placeholder) {
      const { order_placeholder } = this.props.orders;
      console.log(order_placeholder);
      return order_placeholder.product.map(e => {
        return (
          <tr key={e._id}>
            <td>{e.regularGas}</td>
            <td>{e.fullGas}</td>
            <td>{e.DeliverOrTakeout}</td>
            <td>{dateFormatBR(e.dateCreated, ' dddd, d mmmm, yyyy')}</td>
            <td>{e.price}</td>
            <td>
              <button className="btn btn-success">Confirmar</button>
            </td>
            <td>
              <button className="btn btn-danger">Cancelar</button>
            </td>
          </tr>
        );
      });
    }
    return <div>Loading</div>;
  }
  render() {
    return (
      <table className="table " style={{ width: '80%', margin: '20px auto' }}>
        <thead className="thead-dark">
          <tr>
            <th scope="col">Common gas</th>
            <th scope="col">Premium Gas</th>
            <th scope="col">Delivery type</th>
            <th scope="col">Time</th>
            <th scope="col">Total</th>
            <th scope="col">Confirm</th>
            <th scope="col">Cancel Order</th>
          </tr>
        </thead>
        <tbody>{this.renderOrderPlaceholder()}</tbody>
      </table>
    );
  }
}

const mapStateToProps = state => {
  return {
    orders: state.products,
  };
};

export default connect(mapStateToProps, actions)(OrdersPlaceholder);

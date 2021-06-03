import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

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
          <div key={e._id}>
            <h3>Confirmar Pedido</h3>
            <div>Gas: {e.regularGas}</div>
            <div>Gas Inteiro: {e.fullGas}</div>
            <div>Entrega: {e.DeliverOrTakeout}</div>
            <div>Data: {e.dateCreated}</div>
            <div>Total: {e.price}</div>
            <button>Confirmar</button>
            <button>Cancelar</button>
          </div>
        );
      });
    }
    return <div>Loading</div>;
  }
  render() {
    return <div> {this.renderOrderPlaceholder()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    orders: state.products,
  };
};

export default connect(mapStateToProps, actions)(OrdersPlaceholder);

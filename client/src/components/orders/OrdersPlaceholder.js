import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { dateBrazil } from './dateFormat';

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
            <td>{dateBrazil(e.dateCreated)}</td>
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
            <th scope="col">Gas</th>
            <th scope="col">Gas Inteiro</th>
            <th scope="col">Tipo de Entrega</th>
            <th scope="col">Horario</th>
            <th scope="col">Total</th>
            <th scope="col">Finalizar</th>
            <th scope="col">Cancelar</th>
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

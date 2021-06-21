import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const ConfirmOrder = props => {
  useEffect(() => {
    props.fetchProducts();
  }, []);

  const displayOrder = () => {
    const { product } = props.products;
    const values = props.location.state;
    if (product) {
      return (
        <div>
          {Object.values(values).map(e => {
            return (
              <div key="receipt">
                <div>
                  Gas Inteiro R${product[0].fullPrice} || Qty {e.fullGas}{' '}
                </div>
                <div>
                  Gas Normal R${product[0].price} || Qty {e.regularGas}{' '}
                </div>
                <div>Entrega - {e.DeliveryOrTakeout} </div>
                <div>Pagamento - {e.PaymentType} </div>
                <div>Taxas - {e.addedPrice} </div>
                <div>Total: {parseInt(e.total) + parseInt(e.addedPrice)} </div>
                <Link to="/">
                  <button
                    onClick={() =>
                      props.submitOrder(props.location.state.values)
                    }
                  >
                    Confirmar Pedido
                  </button>
                </Link>
                <button>Voltar</button>
              </div>
            );
          })}
        </div>
      );
    }
    return <div>Loading</div>;
  };

  return (
    <div>
      <h2>Confirmar Pedido</h2>
      {displayOrder()}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps, actions)(ConfirmOrder);

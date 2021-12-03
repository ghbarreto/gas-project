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
              <div key="receipt" style={{textAlign: 'center'}}>
                <div>
                  Premium Gas R${product[0].fullPrice} || Quantity {e.fullGas}{' '}
                </div>
                <div>
                  Common Gas R${product[0].price} || Quantity {e.regularGas}{' '}
                </div>
                <div>Delivery - {e.DeliveryOrTakeout} </div>
                <div>Payment - {e.PaymentType} </div>
                <div>Taxes - {e.addedPrice} </div>
                <div>Total: {parseInt(e.total) + parseInt(e.addedPrice)} </div>
                <Link to="/">
                  <button
                    onClick={() =>
                      props.submitOrder(props.location.state.values)
                    }
                  >
                    Confirm
                  </button>
                </Link>
                <button>Return</button>
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
      <h2 style={{textAlign: 'center'}}>Confirmar Pedido</h2>
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

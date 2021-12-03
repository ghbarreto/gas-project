import React from 'react';
// importing the action creators
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Field, reduxForm, change } from 'redux-form';
import { Card } from 'react-bootstrap';
import DeliveryOrTakeout from './DeliveryOrTakeout';

import './Product.css';

class Products extends React.Component {
  state = {
    counter: 1,
    fullGas: 0,
  };

  componentDidMount() {
    this.props.fetchProducts();
  }

  incrementQuantity() {
    this.setState({ counter: this.state.counter + 1 }, () => {
      this.props.change('regularGas', this.state.counter);
    });
  }

  decrementQuantity() {
    if (this.state.counter <= 0) {
      return;
    } else {
      this.setState({ counter: this.state.counter - 1 }, () => {
        this.props.change('regularGas', this.state.counter);
      });
    }
  }

  incrementFullGas() {
    this.setState({ fullGas: this.state.fullGas + 1 }, () => {
      this.props.change('fullGas', this.state.fullGas);
    });
  }

  decrementFullGas() {
    if (this.state.fullGas <= 0) {
      return;
    } else {
      this.setState({ fullGas: this.state.fullGas - 1 }, () => {
        this.props.change('fullGas', this.state.fullGas);
      });
      this.props.change('fullGas', this.state.fullGas);
    }
  }

  addingTotal() {
    return this.props.products.product.map(product => {
      const firstValue = this.state.counter * product.price;
      const secondValue = this.state.fullGas * product.fullPrice;
      this.props.change('total', firstValue + secondValue);

      return firstValue + secondValue;
    });
  }

  submitOrder = (values, dispatch) => {
    return this.props.history.push({
      pathname: '/orders/confirm',
      state: { values: values },
    });
  };

  renderProducts() {
    if (this.props.products.product) {
      return this.props.products.product.map(product => {
        return (
          <div
            key={product}
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '20px',
            }}
          >
            <form
              style={{ fontSize: '20px' }}
              onSubmit={this.props.handleSubmit(this.submitOrder)}
            >
              <Card style={{ width: '18rem' }}>
                <Card.Img
                  variant="top"
                  src="https://www.omundodaquimica.com.br/curiosidade/imagens/cz_botijao.png"
                />
                <Card.Body>
                  <Card.Title>
                    <h1 key="gas">{product.gas}</h1>
                  </Card.Title>

                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-evenly',
                    }}
                  >
                    <p>Gas Inteiro</p>
                    <span onClick={e => this.incrementFullGas()}>
                      <i
                        style={{ cursor: 'pointer' }}
                        className="material-icons hoverButtons"
                      >
                        add
                      </i>
                    </span>
                    {this.state.fullGas}
                    <span onClick={e => this.decrementFullGas()}>
                      <i
                        style={{ cursor: 'pointer' }}
                        className="material-icons hoverButtons"
                      >
                        remove
                      </i>
                    </span>
                  </div>
                  <div>
                    <Field
                      style={{ display: 'none' }}
                      name="fullGas"
                      component="input"
                      type="text"
                    />

                    <Field
                      style={{ display: 'none' }}
                      name="regularGas"
                      component="input"
                      type="text"
                    />

                    <Field
                      style={{ display: 'none' }}
                      name="total"
                      component="input"
                      type="text"
                    />
                  </div>
                  <div
                    value="quantity"
                    style={{
                      display: 'flex',
                      justifyContent: 'space-evenly',
                      marginBottom: '20px',
                      marginTop: '-20px',
                    }}
                  >
                    <p style={{ marginRight: '30px' }}>Normal:</p>
                    <span
                      className="iconStyle"
                      onClick={e => this.incrementQuantity()}
                    >
                      <i
                        style={{ cursor: 'pointer' }}
                        className="material-icons hoverButtons"
                      >
                        add
                      </i>
                    </span>
                    <div key="counter">{this.state.counter}</div>
                    <span onClick={e => this.decrementQuantity()}>
                      <i
                        style={{ cursor: 'pointer' }}
                        className="material-icons hoverButtons"
                      >
                        remove
                      </i>
                    </span>
                  </div>
                  <div>
                    <DeliveryOrTakeout selection={this.selection} />
                  </div>

                  <div>
                    <p className="left">
                      Qtd: {this.state.counter + this.state.fullGas}
                    </p>

                    <p className="right">Total: R${this.addingTotal()}</p>
                  </div>
                  <button type="submit" className="right" variant="primary ">
                    Order
                  </button>
                </Card.Body>
              </Card>
            </form>
          </div>
        );
      });
    }
    return <div></div>;
  }

  render() {
    return <div>{this.renderProducts()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
  };
};

Products = reduxForm({
  form: 'submitOrder',
})(Products);

Products = connect(mapStateToProps, actions)(Products);

export default Products;

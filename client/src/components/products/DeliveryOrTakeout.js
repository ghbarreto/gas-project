import React from 'react';
import { Field, Form, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class DeliveryOrTakeout extends React.Component {
  state = {
    disabled: false,
    additionalPrices: 0,
  };

  settingSelectionAndRadioButton = e => {
    this.props.selection(e.target.value);
    this.setState({ disabled: this.state.disabled });
  };

  addedPrices = e => {
    this.setState({ additionalPrices: e });
  };

  render() {
    return (
      <div>
        <hr></hr>
        <label>
          <h4>Delivery</h4>
        </label>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
          }}
        >
          <label>
            <Field
              name="DeliveryOrTakeout"
              component="input"
              type="radio"
              value="Portaria"
            />
            Takeout
          </label>
          <label>
            <Field
              name="DeliveryOrTakeout"
              component="input"
              type="radio"
              value="Delivery"
            />
            Delivery
          </label>
        </div>

        <div>
          <hr></hr>
          <label>
            <h4>Payment</h4>
          </label>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
            }}
          >
            <label>
              <Field
                name="PaymentType"
                component="input"
                type="radio"
                value="Cartao"
              />
              Credit Card
            </label>
            <label>
              <Field
                name="PaymentType"
                component="input"
                type="radio"
                value="Dinheiro"
              />
              Cash
            </label>
          </div>
          <hr></hr>
          <div>
            <label>Additional Taxes</label>
            <div>
              <Field
                name="addedPrice"
                component="input"
                type="number"
                value={this.state.additionalPrices}
                onChange={e => this.addedPrices(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
    // form: state.form,
  };
};

DeliveryOrTakeout = reduxForm({
  form: 'submitOrder',
})(DeliveryOrTakeout);
DeliveryOrTakeout = connect(mapStateToProps, actions)(DeliveryOrTakeout);

export default DeliveryOrTakeout;

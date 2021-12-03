import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class ShowDbValues extends React.Component {
  renderDbValues() {
    if (this.props.values.product) {
      return this.props.values.product.map(e => {
        return (
          <div key={e} style={{ backgroundColor: 'lavender' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                fontSize: '20px',
                fontWeight: 'bold',
                boxShadow: '0px 0px 0px 0px',
                marginBottom: '-20px',
              }}
            >
              <p key={e.price}>Common gas: R${e.price}</p>
              <p key={e.fullPrice}>Premium gas:R${e.fullPrice}</p>
              <p key={e.deliveryPrice}>Delivery: R${e.deliveryPrice}</p>
              <p key={e.takeoutPrice}>Takeout: R${e.takeoutPrice}</p>
            </div>

            <div
              className="card-panel grey center lighten-2"
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                marginTop: '20px',
                fontSize: '20px',
                fontWeight: 'bold',
              }}
            >
              <p style={{ color: 'red' }}>Stock: {e.gasAmount}</p>
              <p style={{ color: 'red' }}>Empty gas: {e.emptyGas}</p>
            </div>
          </div>
        );
      });
    }

    return <div></div>;
  }

  render() {
    return <div>{this.renderDbValues()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    values: state.products,
  };
};

export default connect(mapStateToProps, actions)(ShowDbValues);

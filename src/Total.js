import React, { Component } from 'react';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class Total extends Component {
  render() {
    return (
      <div className="summary__total">
        <div className="summary__total__label">Total</div>
        <div className="summary__total__value">
          {USCurrencyFormat.format(Object.keys(this.props.state.selected).reduce(
              (acc, curr) => acc + this.props.state.selected[curr].cost,
              0
            )
          )}
        </div>
      </div>)
  }
}

export default Total;
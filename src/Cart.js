import React, { Component}  from 'react';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class Cart extends Component {
  render() {
    const featureHash = this.props.feature + '-' + this.props.index;
    const selectedOption = this.props.state.selected[this.props.feature];
    return (
      <div className="summary__option" key={featureHash}>
        <div className="summary__option__label">{this.props.feature} </div>
        <div className="summary__option__value">{selectedOption.name}</div>
        <div className="summary__option__cost">
          {USCurrencyFormat.format(selectedOption.cost)}
        </div>
      </div>
    )
  }
}

export default Cart;
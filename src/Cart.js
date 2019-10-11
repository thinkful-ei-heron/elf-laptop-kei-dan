import React, { Component}  from 'react';
import USCurrencyFormat from './USCurrencyFormat';

class Cart extends Component {
  render() {
    return (
      Object.keys(this.props.state.selected).map((feature, index) => {
        const featureHash = feature + '-' + index;
        const selectedOption = this.props.state.selected[feature]
        return (
          <div className="summary__option" key={featureHash}>
            <div className="summary__option__label">{feature} </div>
            <div className="summary__option__value">{selectedOption.name}</div>
            <div className="summary__option__cost">
              {USCurrencyFormat.format(selectedOption.cost)}
            </div>
          </div>  
        )
      })
    )
  }
}

export default Cart;
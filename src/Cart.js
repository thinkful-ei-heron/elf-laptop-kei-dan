import React from 'react';
import Total from './Total';
import Summary from './Summary';

function Cart (props) {
  return (
		<section className="main__summary">
			<h2>Your cart</h2>
			<Summary selected={props.selected}
               inDollar={props.inDollar}
      />
			<div className="summary__total">
				<div className="summary__total__label">Total</div>
				<div className="summary__total__value">
					<Total selected={props.selected}
								 inDollar={props.inDollar}
					/>
				</div>
			</div>
		</section>

)

}

export default Cart;

import React from 'react';
import CartSummary from './CartSummary'
import Total from './Total'

function Cart (props) {

  return (
		<section className="main__summary">
			<h2>Your cart</h2>
			<CartSummary inDollar={props.inDollar}
						selected={props.selected}
			/>
      <Total inDollar={props.inDollar}
             selected={props.selected}
      />
		</section>
  )
}
export default Cart

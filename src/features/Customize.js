import React from 'react'
import Features from './Features'

function Customize (props) {

  const features = Object.keys(props.features).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
     return (
      <Features key={featureHash}
                feature={feature}
                features={props.features}
                inDollar={props.inDollar}
                state={props.state}
                changeItem={props.changeItem}
      />
    )
  })

  return (
		<form className="main__form">
			<h2>Customize your laptop</h2>
      {features}
		</form>
  ) 
}

export default Customize

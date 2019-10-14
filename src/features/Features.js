import React from 'react'
import Options from './Options'
import slugify from 'slugify'

function Features (props) {
	const options = props.features[props.feature].map(item =>{
		const itemHash = slugify(JSON.stringify(item))
    return <Options itemHash={itemHash}
                    feature={props.feature}
                    item={item}
                    inDollar={props.inDollar}
                    state={props.state}
                    changeItem={props.changeItem}
           />
  })
  return (
		<fieldset className="feature" key={props.key}>
			<legend className="feature__name">
				<h3>{props.feature}</h3>
			</legend>
			{options}
		</fieldset>

  )
}
export default Features

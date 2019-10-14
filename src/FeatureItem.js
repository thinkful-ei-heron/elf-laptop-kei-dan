import React from 'react';
import slugify from 'slugify';

function FeatureItem (props){ 
    const options = props.feature.map(item => {
  console.log(props.selected, item.name)
      return (
        <div key={props.key} className="feature__item">
          <input
            type="radio"
            id={props.key}
            className="feature__option"
            /*name={slugify(props.feature)}*/
            checked={item.name === props.selected}
            onChange={e => props.updateFeature(props.feature, item)}
          />
          <label htmlFor={props.key} className="feature__label">
            {item.name}
          </label>
        </div>
      )
   })
  return <div>{options}</div>
}
export default FeatureItem;

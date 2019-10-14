import React from 'react';
import slugify from 'slugify';

function FeatureItem (props){
  return ( 
    <div key={props.itemHash}>
            <input
              type="radio"
              id={props.itemHash}
              className="feature__option"
            />
          <div key={props.itemHash} className="feature__item">
            <label htmlFor={props.itemHash} className="feature__label">
            </label>
          </div>
    </div>
  )
}

export default FeatureItem;

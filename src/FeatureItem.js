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
//            <input
//              type="radio"
//              id={props.itemHash}
//              className="feature__option"
//              name={slugify(feature)}
//              checked={item.name === this.state.selected[feature].name}
//              onChange={e => this.updateFeature(feature, item)}
//            />
//          <div key={itemHash} className="feature__item">
//            <label htmlFor={itemHash} className="feature__label">
//              {item.name} ({USCurrencyFormat.format(item.cost)})
//            </label>
//          </div>
//

  )

}

export default FeatureItem;

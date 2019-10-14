import React from 'react';
import FeatureItem from './FeatureItem';
import slugify from 'slugify';

//function Features (props) {
//    const features = Object.keys(props.features).map((feature, idx) => {
//      const featureHash = feature + '-' + idx;
//      const options = props.features[feature].map(item => {
//        const itemHash = slugify(JSON.stringify(item));
//        return (
//          <div key={itemHash} className="feature__item">
//            <input
//              type="radio"
//              id={itemHash}
//              className="feature__option"
//              name={slugify(feature)}
//              checked={item.name === props.selected[feature].name}
//              onChange={e => props.updateFeature(feature, item)}
//            />
//            <label htmlFor={itemHash} className="feature__label">
//              {item.name}
//            </label>
//          </div>
//        );
//      });
//
//      return (
//        <fieldset className="feature" key={featureHash}>
//          <legend className="feature__name">
//            <h3>{feature}</h3>
//          </legend>
//          {options}
//        </fieldset>
//      );
//    });

function Features (props) {
    const features = Object.keys(props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          <FeatureItem feature={props.features[feature]}
                       key={featureHash}
                       selected={props.selected[feature]}
                       idx={idx}
          />
        </fieldset>
      );
    });

  return (
	  <form className="main__form">
      <h2>Customize your laptop</h2>
      {features}
    </form>
  )
}


export default Features;

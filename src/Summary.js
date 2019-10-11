import React from 'react';

function Summary (props){
      const summary = Object.keys(props.selected).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const selectedOption = props.selected[feature];
        return (
          <div className="summary__option" key={featureHash}>
            <div className="summary__option__label">{feature} </div>
            <div className="summary__option__value">{selectedOption.name}</div>
            <div className="summary__option__cost">
              {props.inDollar.format(selectedOption.cost)}
            </div>
          </div>
        );
    });
	
  return (
    <section className="main__summary">
      {summary}
    </section>
  )

}
export default Summary;

import React, { Component } from 'react';
import OptionsDisplay from './OptionsDisplay';

class CustomizeList extends Component {
  render () {
    return (
      Object.keys(this.props.features).map((feature, index) => {
        return <OptionsDisplay key={index} index={index} feature={this.props.features[feature]} name={feature} state={this.props.state} update={this.props.update}/>
      })
    )
  }
}

export default CustomizeList
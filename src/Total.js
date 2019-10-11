import React from 'react';

function Total(props) {

  const total = Object.keys(props.selected).reduce((acc, curr) => acc + props.selected[curr].cost,0)

  return props.inDollar.format(total)
}

export default Total;



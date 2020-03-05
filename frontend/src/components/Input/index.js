import React from 'react';

function Input  (props) {
  const {field, ...rest} = props;
  return (
    <label>
      <div>Email:</div>
      <input {...field} {...rest}/>
    </label>
  )
}

export default Input;
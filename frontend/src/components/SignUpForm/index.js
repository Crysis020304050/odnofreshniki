import React, { Component } from 'react';
import { Form, Field } from 'formik';
import Input           from '../Input';

const SignUpForm = (props) => {

  return (

    <Form>
      <Field type="email"
             name="email"
             onChange={(e) => {console.log( e.target.value );}}
             children={Input}/>
      <Field type="password"
             name="password"
      />
      <div onClick={props.submitForm}>login</div>
    </Form>
  );
};

export default SignUpForm;
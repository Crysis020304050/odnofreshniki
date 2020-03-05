import React from 'react';
import { Formik, Form, Field, withFormik } from 'formik';
import PropTypes from 'prop-types';
import Input from '../Input';

const handleSubmit = (value) => {

};


const SingInForm = props => {
  return (
    <Form>
      <Field type="email" name="email" component={Input}/>
      <Field type="password" name="password"/>
      <div onClick={props.submitForm}>login</div>
    </Form>
  );
};

/*SingInForm.propTypes = {
  initialValues: PropTypes.shape({
                                   email: PropTypes.string.isRequired,
                                   password: PropTypes.string.isRequired,
                                 })
};

SingInForm.defaultProps = {
  initialValues: {
    email: '',
    password: '',
  }
};*/

export default withFormik({

                          })(SingInForm);
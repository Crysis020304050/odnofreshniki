import React          from 'react';
import { withRouter } from 'react-router';
import SignUpForm     from '../components/SignUpForm';
import { Formik }     from 'formik';

function SignUpPage (props) {
  const handleSubmit = (values) => {
    console.log( values );
  };
  return (
    <>
      <h1>Sign up Page.</h1>
      <Formik initialValues={{ email: '', password: '' }}
              onSubmit={handleSubmit}>
        {
          (formikProps) => (<SignUpForm {...formikProps}/>)
        }
      </Formik>
    </>
  );
}

export default withRouter( SignUpPage );
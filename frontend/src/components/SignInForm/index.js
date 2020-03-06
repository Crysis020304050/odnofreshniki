import React                       from 'react';
import { Form, Field, withFormik } from 'formik';
import Input                       from '../Input';
import * as yup                    from 'yup';

const emailSchema = yup.string().email().required();

const handleSubmit = (values) => {
  console.log( values );
};

const SignInForm = (props) => {

  const emailValidate = async (value) => {
    try {
      await emailSchema.validate( value );
    } catch (e) {
      return e.message;
    }
  };

  return (
    <Form>
      <Field validate={emailValidate}
             type="text"
             name="email"
             onChange={(e) => {console.log( e.target.value );}}>
        {
          (fieldProps) => (<Input {...fieldProps} label={'Test test: '}/>)
        }
      </Field>
      <Field type="password"
             name="password"
      />
      <div onClick={props.submitForm}>login</div>
    </Form>
  );
};

export default withFormik( {
                             mapPropsToValues: () => ({ email: '', password: '' }),
                             handleSubmit,
                           } )( SignInForm );
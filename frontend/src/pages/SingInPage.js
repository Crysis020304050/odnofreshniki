import React from 'react';
import {withRouter} from 'react-router';
import SingInForm from '../components/SingInForm';

function SingInPage (props) {
  return (
    <>
    <h1>Sing In Page</h1>
    <SingInForm/>
    </>
  )
}

export default withRouter(SingInPage);
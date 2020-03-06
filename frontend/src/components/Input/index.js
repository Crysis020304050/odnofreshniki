import React      from 'react';
import styles     from './Input.module.scss';
import classNames from 'classnames';

function Input ( { field, form, meta, ...rest }) {

  const inputClassNames = classNames( styles.defaultClass, {
    [styles.invalidClass]: meta.touched && meta.error,
    [styles.validClass]: meta.touched && !meta.error,
  } );

  return (
    <label className={styles.container}>
      <input className={inputClassNames} {...field} />
      {
        meta.error && <div className={styles.errorTip}>{meta.error}</div>
      }
    </label>
  );
}

export default Input;
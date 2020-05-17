import React, { useState, useEffect } from 'react';
import { InputWrapper } from './style';
import { Field, ErrorMessage } from 'formik';

const TextInput = ({ name, errors, id, label, className, touched, ...props }) => {
  const [state, setState] = useState({ focus: false, label: false });

  useEffect(() => {
    if(props.values[name] !== '' && label){
      setState({...state,label:true})
    } else {
      setState({...state,label:false})
    }
  }, [props.values[name]])

  return (
    <InputWrapper>
      <div className={`form-group ${className}`}>
        <label
          htmlFor={name}
          className={`form-control  ${errors[name] && touched[name] ? ' is-invalid' : ''} ${props.disabled ? ' disabled' : ''} ${state.label ? '' : ' no-label'}`}
        >
          {state.label ? label : ''} {props.required && state.label ? '*' : ''}
          <div className="input-field">
            <Field
              id={id}
              name={name}
              autoComplete={false ? 'off' : 'on'}
              placeholder={label ? label: props.placeholder}
              disabled={props.disabled ? props.disabled : false}
              type={props.type ? props.type : 'text'}
            />
          </div>
        </label>
        <ErrorMessage name={name} component="div" className="invalid-feedback" />
      </div>
    </InputWrapper>
  );
};

export default TextInput;

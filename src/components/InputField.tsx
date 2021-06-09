import React, { Fragment } from 'react';

interface InputFieldProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

const InputField = (props: InputFieldProps) => {
  return (
    <Fragment>
      <div>
        <label>
          {props.label}
          <span>
            <input
              type={props.type}
              required
              onChange={props.onChange}
              value={props.value}
            ></input>
          </span>
        </label>
      </div>
    </Fragment>
  );
};

export default InputField;

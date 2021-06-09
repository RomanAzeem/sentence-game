import React, { Fragment } from 'react';

interface SubmitButtonProps {
  type: any;
  value: any;
  onClick: any;
}

const SubmitButton = (props: SubmitButtonProps) => {
  return (
    <Fragment>
      <div>
        <button
          type={props.type}
          onClick={() => {
            props.onClick();
          }}
        >
          {props.value}
        </button>
      </div>
    </Fragment>
  );
};

export default SubmitButton;

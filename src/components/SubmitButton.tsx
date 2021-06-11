import { Fragment } from 'react';

interface SubmitButtonProps {
  type: any;
  value: string;
  onClick: () => void;
}

const SubmitButton = (props: SubmitButtonProps) => {
  return (
    <Fragment>
      <div className='center'>
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

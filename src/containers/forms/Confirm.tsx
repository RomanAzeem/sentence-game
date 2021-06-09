import React, { Fragment } from 'react';
import SubmitButton from '../../components/SubmitButton';

interface ConfirmProps {
  prevStep: () => void;
  nextStep: () => void;
  who: string;
  what: string;
  when: string;
  where: string;
}
const Confirm = (props: ConfirmProps) => {
  return (
    <Fragment>
      <div>
        <div>
          {' '}
          {props.who === ''
            ? `Please Enter Who Question to complete the Sentence`
            : `Who Question is : ${props.who}`}{' '}
        </div>
        <div>
          {' '}
          {props.what === ''
            ? `Please Enter What Question to complete the Sentence`
            : `What Question is : ${props.what}`}{' '}
        </div>
        <div>
          {' '}
          {props.where === ''
            ? `Please Enter Where Question to complete the Sentence`
            : `Where Question is : ${props.where}`}{' '}
        </div>
        <div>
          {' '}
          {props.when === ''
            ? `Please Enter When Question to complete the Sentence`
            : `When Question is : ${props.when}`}{' '}
        </div>
        <SubmitButton
          type={'button'}
          value={'Back'}
          onClick={props.prevStep}
        ></SubmitButton>
        {props.who !== '' ||
        props.what !== '' ||
        props.when !== '' ||
        props.where !== '' ? (
          <SubmitButton
            type={'submit'}
            value={'Confirm and Continue'}
            onClick={props.nextStep}
          ></SubmitButton>
        ) : (
          <div>
            Please Submit answers to all the questions to Complete the Sentence
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Confirm;

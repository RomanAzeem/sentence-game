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
      <div className='card center'>
        <div className='validator'>
          {' '}
          {props.who === '' ? (
            <span>
              <strong>Who:</strong>
              {` Question "Who" is required`}
              <span style={{ color: ' rgb(178,4,4)' }}>*</span>
            </span>
          ) : (
            `Who: ${props.who}`
          )}{' '}
        </div>
        <div className='validator'>
          {' '}
          {props.what === '' ? (
            <span>
              <strong>What:</strong>
              {` Question "What" is required`}
              <span style={{ color: ' rgb(178,4,4)' }}>*</span>
            </span>
          ) : (
            `What: ${props.what}`
          )}{' '}
        </div>
        <div className='validator'>
          {' '}
          {props.when === '' ? (
            <span>
              <strong>When:</strong>
              {` Question "When" required`}
              <span style={{ color: ' rgb(178,4,4)' }}>*</span>
            </span>
          ) : (
            `When: ${props.when}`
          )}{' '}
        </div>
        <div className='validator'>
          {' '}
          {props.where === '' ? (
            <span>
              <strong>Where:</strong>
              {` Question "Where" is required`}
              <span style={{ color: ' rgb(178,4,4)' }}>*</span>
            </span>
          ) : (
            `Where: ${props.where}`
          )}{' '}
        </div>
        <SubmitButton
          type={'button'}
          value={'Back'}
          onClick={props.prevStep}
        ></SubmitButton>
        {props.who !== '' &&
        props.what !== '' &&
        props.when !== '' &&
        props.where !== '' ? (
          <SubmitButton
            type={'submit'}
            value={'Confirm and Continue'}
            onClick={props.nextStep}
          ></SubmitButton>
        ) : (
          <div className='validator note'>
            Please Submit answers to all the questions to Complete the Sentence
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Confirm;

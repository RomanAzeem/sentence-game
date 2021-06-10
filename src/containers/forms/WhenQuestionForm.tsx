import React, { Fragment, useState } from 'react';
import InputField from '../../components/InputField';
import SubmitButton from '../../components/SubmitButton';

interface WhenQuestionProps {
  prevStep: () => void;
  nextStep: () => void;
  answer: string;
  getQuestion: (word: string) => void;
}

const WhenQuestionForm = (props: WhenQuestionProps) => {
  return (
    <Fragment>
      <div className='card center'>
        <form>
          <InputField
            label={'When ?'}
            type={'string'}
            value={props.answer}
            onChange={(e: any) => props.getQuestion(e.target.value)}
          ></InputField>
          <SubmitButton
            type={'button'}
            value={'Back'}
            onClick={props.prevStep}
          ></SubmitButton>
          <SubmitButton
            type={'submit'}
            value={'Next'}
            onClick={props.nextStep}
          ></SubmitButton>
        </form>
      </div>
    </Fragment>
  );
};

export default WhenQuestionForm;

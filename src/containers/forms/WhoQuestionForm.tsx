import React, { Fragment, useState } from 'react';
import InputField from '../../components/InputField';
import SubmitButton from '../../components/SubmitButton';

interface WhoQuestionProps {
  nextStep: () => void;
  answer: string;
  getQuestion: (word: string) => void;
}

const WhoQuestionForm = (props: WhoQuestionProps) => {
  return (
    <Fragment>
      <div>
        <form>
          <InputField
            label={'Who Question'}
            type={'string'}
            value={props.answer}
            onChange={(e: any) => props.getQuestion(e.target.value)}
          ></InputField>
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

export default WhoQuestionForm;
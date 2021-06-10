import { Fragment } from 'react';
import InputField from '../../components/InputField';
import SubmitButton from '../../components/SubmitButton';

interface WhatQuestionProps {
  prevStep: () => void;
  nextStep: () => void;
  getQuestion: (word: string) => void;
  answer: string;
}

const WhatQuestionForm = (props: WhatQuestionProps) => {
  return (
    <Fragment>
      <div className='card center'>
        <form>
          <InputField
            label={'What ?'}
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

export default WhatQuestionForm;

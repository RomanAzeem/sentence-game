import React, { Fragment, useState } from 'react';

interface ResultProps {
  who: string;
  what: string;
  when: string;
  where: string;
}

const Result = (props: ResultProps) => {
  return (
    <Fragment>
      <div>{`${props.who} ${props.what} ${props.where} ${props.when}`}</div>
    </Fragment>
  );
};

export default Result;

import React from 'react';
import { useJobs } from '../../../Context';
import { JobStyled, LabelTitleStyled } from './styles';
import Fields from './fields';
import CloseIcon from './CloseIcon';

const Job = () => {
  const { jobsArray } = useJobs();

  return jobsArray.map((el, i) => (
    <JobStyled key={el.id}>
      <LabelTitleStyled>
        Tarefa {i + 1}
        <CloseIcon id={el.id} />
      </LabelTitleStyled>
      <Fields index={i} />
    </JobStyled>
  ));
};

export default Job;

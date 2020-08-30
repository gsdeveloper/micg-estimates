import React from 'react';
import { FormMobileStyled, JobWrapper } from './styles';
import AddJobTask from '../add-jobtask';
import Job from './job';
import Estimate from '../estimate';

const JobContainer = () => {
  function generatePDF(e) {
    e.preventDefault();
  }
  return (
    <FormMobileStyled id="job" onSubmit={generatePDF}>
      <JobWrapper>
        <Job />
        <AddJobTask />
      </JobWrapper>
      <Estimate />
    </FormMobileStyled>
  );
};

export default JobContainer;

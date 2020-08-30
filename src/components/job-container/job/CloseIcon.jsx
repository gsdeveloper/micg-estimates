import React from 'react';
import { CloseIconStyled } from './styles';
import { useJobs } from '../../../Context';
import close from '../../../assets/icons/close.svg';

const CloseIcon = ({ id }) => {
  const { removeJob } = useJobs();
  return <CloseIconStyled src={close} onClick={() => removeJob(id)} />;
};

export default CloseIcon;

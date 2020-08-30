import React from 'react';
import { AddJobTaskStyled, AddIconStyled, DescriptionStyled } from './styles';
import { useJobs } from '../../Context';
import add from '../../assets/icons/add.svg';

const AddJobTask = () => {
  const { addJob } = useJobs();

  return (
    <AddJobTaskStyled onClick={() => addJob()}>
      <AddIconStyled src={add} />
      <DescriptionStyled>Adicionar Tarefa</DescriptionStyled>
    </AddJobTaskStyled>
  );
};

export default AddJobTask;

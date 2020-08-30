import React from 'react';
import InputHandler from './InputHandler';
import { LabelStyled, FieldStyled } from './styles';

const Field = ({ index, label }) => (
  <FieldStyled>
    <LabelStyled>{label}</LabelStyled>
    <InputHandler index={index} name={label} />
  </FieldStyled>
);

export default Field;

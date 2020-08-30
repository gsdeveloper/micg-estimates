import React from 'react';
import PropTypes from 'prop-types';
import { FieldsStyled } from './styles';
import Field from './Field';

const Fields = ({ index }) => (
  <FieldsStyled>
    <Field index={index} label="local" />
    <Field index={index} label="trabalho" />
    <Field index={index} label="valor" />
  </FieldsStyled>
);

Fields.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Fields;

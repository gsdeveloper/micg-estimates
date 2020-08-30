import React from 'react';
import PropTypes from 'prop-types';
import { InputStyled } from './styles';
import { useJobs } from '../../../../Context';
import capitalize from '../../../../utils/capitalize';

const InputHandler = ({ index, name }) => {
  const { setFieldValue, jobsArray } = useJobs();
  return name === 'valor' ? (
    <InputStyled
      type="number"
      placeholder="200"
      onChange={(e) => setFieldValue(index, name, e.target.value)}
      value={jobsArray[index][name] || ''}
    />
  ) : (
    <InputStyled
      placeholder={
        name === 'local'
          ? 'Sala da cozinha'
          : 'Pintura, drywall e massa corrida'
      }
      type="text"
      onChange={(e) => setFieldValue(index, name, capitalize(e.target.value))}
      value={capitalize(jobsArray[index][name] || '')}
    />
  );
};

InputHandler.propTypes = {
  name: PropTypes.string.isRequired,
};

export default InputHandler;

import React, { useState } from 'react';
import styles from './styles';
import { Text } from '@react-pdf/renderer';
import capitalize from '../../../utils/capitalize';
const currentDate = new Date();

const DateWritten = () => {
  const [date, useDate] = useState({
    month: capitalize(
      currentDate.toLocaleString('default', {
        month: 'long',
      })
    ),
    day: currentDate.toLocaleString().slice(0, 2),
    year: currentDate.toLocaleString().split('/').pop().slice(0, 4),
  });

  return (
    <Text style={styles.date}>
      {date.day} de {date.month} de {date.year}
    </Text>
  );
};

export default DateWritten;

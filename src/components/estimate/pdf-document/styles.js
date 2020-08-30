import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: '10vw',
    fontFamily: 'Calibri',
    display: 'flex',
    flexDirection: 'column',
  },

  flex: { display: 'flex', flexDirection: 'column' },

  micg: { marginTop: '7vw', fontSize: '32', fontWeight: '1000' },

  description: { marginTop: '20px', fontSize: '16' },

  job: { display: 'flex', flexDirection: 'column', marginTop: '40px' },

  local: { fontWeight: 600 },

  trabalho: { fontWeight: 600, marginTop: '7px' },

  valor: { marginTop: '7px' },

  lastPart: { marginTop: '40px', display: 'flex', flexDirection: 'column' },

  date: { marginTop: '40px', textAlign: 'right' },

  payment: { marginTop: '10px' },

  bold: { fontWeight: 600 },
});

export default styles;

import React from 'react';
import { Document, Page, Text, View, Font } from '@react-pdf/renderer';
import styles from './styles';
import DateWritten from './DateWritten';

const PDFDocument = ({ jobsArray, totalValue }) => (
  <Document>
    <Page style={styles.page} size="A4">
      <View style={styles.flex}>
        <Text style={styles.micg}>MICG</Text>
        <Text style={styles.description}>
          Olá, conforme combinado, segue o orçamento:
        </Text>
      </View>
      {jobsArray.map((el) => (
        <View style={styles.job}>
          <Text style={styles.local}>{el.local}</Text>
          <Text style={styles.trabalho}>{el.trabalho}</Text>
          <Text style={styles.valor}>Valor: {el.valor} reais</Text>
        </View>
      ))}

      <View style={styles.lastPart}>
        {jobsArray.length > 1 && (
          <Text>
            Valor total: <Text style={styles.bold}>{totalValue()}</Text> reais
            (mão de obra)
          </Text>
        )}
        <Text style={styles.payment}>
          Formas de pagamento: a combinar (aceitamos cartão de crédito e
          parcelamos)
        </Text>
      </View>

      <Text style={styles.date}>
        <DateWritten />
      </Text>
    </Page>
  </Document>
);

Font.register({
  family: 'Calibri',
  fonts: [
    {
      src:
        'https://db.onlinewebfonts.com/t/a78cfad3beb089a6ce86d4e280fa270b.ttf',
    },
    {
      src:
        'https://db.onlinewebfonts.com/t/c8980f67879f6f08737d47c2ecb1cc43.ttf',
      fontWeight: 600,
    },
  ],
});

export default PDFDocument;

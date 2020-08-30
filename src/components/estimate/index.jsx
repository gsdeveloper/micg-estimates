import React from 'react';
import { PDFWrapperStyled, PreviewLabelStyled } from './styles';
import { GenerateButtonStyled } from '../job-container/styles';
import { View } from '@react-pdf/renderer';
import PDFDocument from './pdf-document';
import { useJobs } from '../../Context';

const Estimate = () => {
  const { jobsArray, getTotalValue } = useJobs();
  return (
    <>
      <PreviewLabelStyled>Preview</PreviewLabelStyled>
      <PDFWrapperStyled>
        <PDFDocument jobsArray={jobsArray} totalValue={getTotalValue} />
      </PDFWrapperStyled>
      <GenerateButtonStyled
        document={
          <PDFDocument jobsArray={jobsArray} totalValue={getTotalValue} />
        }
        fileName="test.pdf"
      >
        Gerar PDF
        {({ blob, url, loading, error }) => console.log(url, loading, error)}
      </GenerateButtonStyled>
    </>
  );
};

export default Estimate;

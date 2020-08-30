import styled from 'styled-components';
import { Document, Page, View, Text } from '@react-pdf/renderer';
import { LabelStyled } from '../job-container/job/fields/styles';

export const PDFWrapperStyled = styled.div`
  margin-top: 12px;
  padding: 20px;
  min-height: 342px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-shadow: 4px 10px 20px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
`;

export const PreviewLabelStyled = styled(LabelStyled)`
  margin-top: 50px;
`;

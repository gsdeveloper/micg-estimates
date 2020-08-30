import styled from 'styled-components';
import { PDFDownloadLink } from '@react-pdf/renderer';

export const FormMobileStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
`;

export const GenerateButtonStyled = styled(PDFDownloadLink)`
  margin-top: 45px;
  height: 50px;
  background: #2973e2;
  box-shadow: 4px 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  width: 100%;
  color: #ffffff;
  text-decoration: none;
`;

export const JobWrapper = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 5%;
    justify-content: space-between;
  }
`;

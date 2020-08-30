import styled from 'styled-components';

export const FieldsStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 768px) {
    margin-top: 20px;
    background: #fafafa;
    border: 1px solid #dedede;
    box-sizing: border-box;
    box-shadow: 4px 10px 20px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 32px;
  }
`;

export const FieldStyled = styled.div`
  margin-top: 28px;
  @media (min-width: 768px) {
    &:first-child {
      margin-top: 0;
    }
  }
`;

export const LabelStyled = styled.h3`
  font-size: 14px;
  letter-spacing: 0.05em;
  color: #848484;
  text-transform: capitalize;
`;

export const InputStyled = styled.input`
  background: #ffffff;
  height: 50px;
  border: 1px solid #e5e5e5;
  box-shadow: 4px 10px 20px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
  padding: 0px 25px;
  margin-top: 10px;
  &::placeholder {
    letter-spacing: 0.05em;
    color: #b9b9b9;
  }
`;

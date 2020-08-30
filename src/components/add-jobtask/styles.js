import styled from 'styled-components';

export const AddJobTaskStyled = styled.button`
  width: 100%;
  height: 171px;
  background: #ffffff;
  box-shadow: 4px 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  @media (min-width: 768px) {
    height: 350px;
    margin-top: 90px;
  }
`;

export const AddIconStyled = styled.img`
  width: 35px;
  height: 35px;
`;

export const DescriptionStyled = styled.p`
  font-size: 16px;
  margin-top: 16px;
  letter-spacing: 0.05em;
  color: #a6a6a6;
  text-align: center;
  font-weight: 600;
`;

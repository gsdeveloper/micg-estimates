import styled from 'styled-components';

export const LandingStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 38px;
  @media (min-width: 768px) {
    margin-top: 80px;
    justify-content: center;
    align-items: center;
  }
`;

export const TitleStyled = styled.h1`
  font-weight: bold;
  font-size: 38px;
  line-height: 120%;
  color: #505d68;
`;

export const ContentStyled = styled.p`
  margin-top: 18px;
  font-size: 14px;
  line-height: 21px;
  /* or 150% */
  color: #a1aeb7;
`;

export const ButtonStyled = styled.button`
  background: #424b5a;
  box-shadow: 4px 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  width: 57%;
  height: 42px;
  margin-top: 21px;
  max-width: 116px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const ArrowStyled = styled.img`
  width: 8px;
  margin-left: 6px;
  margin-top: 3px;
`;

import React from 'react';
import arrow from '../../assets/icons/arrow.svg';

import {
  LandingStyled,
  TitleStyled,
  ContentStyled,
  ButtonStyled,
  ArrowStyled,
} from './styles';

const Landing = () => (
  <LandingStyled>
    <TitleStyled>Ficou fácil fazer os orçamentos</TitleStyled>
    <ContentStyled>
      Preencha os campos e um PDF com o orçamento vai ser gerado
    </ContentStyled>
    <ButtonStyled
      onClick={() => document.getElementById('job').scrollIntoView('#id')}
    >
      Começar <ArrowStyled src={arrow} />
    </ButtonStyled>
  </LandingStyled>
);

export default Landing;

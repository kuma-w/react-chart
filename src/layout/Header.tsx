import React from 'react';
import { styled } from '@mui/material/styles';
import { AppBar } from '@mui/material';
import LinkButton from '../components/LinkButton';

const Wrapper = styled(AppBar)`
  place-items: center;
  position: relative;
  h1 {
    font-size: 24px;
    font-weight: bold;
  }
  h2 {
    font-size: 20px;
  }
`;

const ButtonContainer = styled('div')`
  display: flex;
  margin: 1rem auto;
  justify-content: center;
`;

const Header = () => {
  return (
    <>
      <Wrapper>
        <h1> rechart </h1>
      </Wrapper>
      <ButtonContainer>
        <LinkButton name='Bar Chart' url='/bar-chart' />
        <LinkButton name='Mix Bar Chart' url='/mix-bar-chart' />
        <LinkButton name='Composed Chart' url='/composed-chart' />
      </ButtonContainer>
    </>
  );
};

export default Header;

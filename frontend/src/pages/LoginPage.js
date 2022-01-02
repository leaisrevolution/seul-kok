import React from 'react'
import styled from 'styled-components';

import useMotion from '../utils/useMotion';
// import { useEffect, useState } from 'react';

// 짱멋진모듈(가로스크롤)
// import ScrollHorizontal from 'react-scroll-horizontal';

//components
import SignupTemplate from '../components/SignupTemplate';

const LoginPage = () => {


  return (
    <>
    <SectionWrapper>
      <LogoTitle dark {...useMotion('down', 1, 0.3)}>
        SEULKOK
      </LogoTitle>

      <MainContent>
        <p dark {...useMotion('down', 1, 0.2)}>당신은 <b>슬콕</b>과 함께하고 계신가요? <br/>
        <p2 dark {...useMotion('down', 1, 0.2)}> 이제 <span style={{color:'#e8384c'}}>슬콕</span>과 함께하세요</p2></p>
      </MainContent>

      <LoginContent>
        <SignupTemplate>
          <SignupFrom>
            <p>Login</p>
            <StyledInput autoComplete="useremail" name="username" placeholder="Useremail" />
            <StyledInput autoComplete="passward" name="passward" placeholder="Passward" />
            <FormButton><p2>Login</p2></FormButton>
          </SignupFrom>
        </SignupTemplate>
    </LoginContent>

    </SectionWrapper>
    </>
  )
}

const SectionWrapper = styled.div`
  background: radial-gradient(
    60% 55% at 50% 8%,
    #2f1316 0%,
    #000000 100%
  ),
  #594fa9;

  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  text-align: center;

  `;

const LogoTitle = styled.header`
  color: var(--main);
  font-size: 2rem;
  margin-top: 5%;
  margin-bottom: 30px;
`;

const MainContent = styled.div`
  font-size: 2.8rem;
  line-height: 3.8rem;
  color: #ffffff;
  margin-bottom: 30px;
  p2 {
    font-size: 3.6rem;
    margin-top: 5px;
  };
`;


const LoginContent = styled.div`

`;

const SignupFrom = styled.div`
  padding-top: 20px;
  padding-left: 30px;
  p {
    color: var(--main);
    font-size: 1.3rem;
    font-weight: bold;
  }
`;

const StyledInput =styled.input`
  font-size: 1rem;

  border: 2px solid;
  border-color: var(--main);
  border-radius: 5px;

  margin-bottom: 20px;
  outline: none;

  width: 93%;
  height: 35px;

  background-color:transparent;

  ::placeholder {
    color: #ffffff;
    text-align: left;
    padding: 0 0.6rem;
  }
`;

// background-color: var(--main);
// background: rgba(255, 255, 255, 0.15);

const FormButton = styled.button`
  font-size: 1rem;
  color: #ffffff;

  border-radius: 5px;
  border: none;

  margin-bottom: 20px;

  width: 94.3%;
  height: 40px;

  background-color: var(--main);
  &:hover {
    background: linear-gradient(
      to right,
      var(--main), #5a292f
    );

  cursor: pointer;

`




export default LoginPage
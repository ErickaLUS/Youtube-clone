import styled from "styled-components";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/actions/SignIn.action";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
  color: ${({ theme }) => theme.text};
`;
const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.textSoft};
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 20px 50px;
  gap: 10px;
`;
const Title = styled.h1`
  color: ${({ theme }) => theme.text};
  font-size: 26px;
`;

const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
`;

const Input = styled.input`
  border: 1px solid #606060;
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  width: 100%;
`;

const Button = styled.button`
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  background-color: ${({ theme }) => theme.textSoft};
`;

const Paragraph = styled.div``;

const SignIn = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.auth.accessToken);

  const handleLogin = () => {
    dispatch(login());
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (accessToken) {
      navigate("/");
    }
  }, [accessToken, navigate]);

  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
       <Button onClick={handleLogin}>Se connecter avec google</Button>
        <SubTitle>To continue to MollTube</SubTitle>
       </Wrapper>
    </Container>
  );
};
export default SignIn;

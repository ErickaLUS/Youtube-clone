import React from "react";
import styled from "styled-components";
import MollTube from "../img/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import LightModeIcon from "@mui/icons-material/LightMode";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { log_out } from "../redux/actions/SignIn.action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;
const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 8px;
  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 3px solid ${({ theme }) => theme.soft};
`;
const Login = styled.div``;

const Button = styled.button``;

const Menu = ({ darkMode, setDarkMode }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logOutHandler = () => {
    dispatch(log_out());
    navigate("/SignIn");
  };
  return (
    <Container>
      <Wrapper>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <Logo>
            <Img src={MollTube} />
            MollTube
          </Logo>
        </Link>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "inherit",
            display: "flex",
            alignItems: "center",
            gap: "20px",
            cursor: "pointer",
            padding: "8px",
          }}
        >
          <HomeIcon />
          Home
        </Link>
        <Item>
          <ExploreIcon />
          Explore
        </Item>
        <Link
          to="/Subscription"
          style={{
            textDecoration: "none",
            color: "inherit",
            display: "flex",
            alignItems: "center",
            gap: "20px",
            cursor: "pointer",
            padding: "8px",
          }}
        >
          <SubscriptionsIcon />
          Subscriptions
        </Link>
        <Item onClick={logOutHandler}>
          <LogoutIcon />
          Logout
        </Item>
        <Hr />
        <Item onClick={() => setDarkMode(!darkMode)}>
          <LightModeIcon />
          {darkMode ? "Light" : "Dark"}Mode
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;

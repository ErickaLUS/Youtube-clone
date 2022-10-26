import styled from "styled-components";
import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  background-color: ${({ theme }) => theme.bgLighter};
  position: sticky;
  top: 0;
  height: 50px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0px 20px;
  justify-content: flex-end;
  position: relative;
`;

const Form = styled.form`
  width: 40%;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #cccc;
  border-radius: 3px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: none;
  color: red;
  border-radius: 10px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const User = styled.div`
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #999;
`;

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
  };
  return (
    <Container>
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <Button type="submit">
            <SearchIcon />
          </Button>
        </Form>

        {/*         <Link to="/SignIn" style={{ textDecoration: "none" }}>
          <Button>
            <AccountCircleIcon />
            SIGN IN
          </Button>
        </Link> */}
      </Wrapper>
    </Container>
  );
};

export default Navbar;

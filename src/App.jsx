import { children, useState, useEffect } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./components/utils/Theme";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Videos from "./pages/Videos.jsx";
import SignIn from "./pages/SignIn.jsx";
import Subscription from "./pages/Subscription.jsx";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;

const Wrapper = styled.div``;
const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container className="App">
        <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main>
          <Navbar />
          <Wrapper>{children}</Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
};

export default function App() {
  const accessToken = useSelector((state) => state.auth.accessToken);
  
  const navigate = useNavigate();
  useEffect(() => {
    if (!accessToken) {
      navigate("/SignIn");
    }
  }, [accessToken]);
  console.log(accessToken);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route path="/SignIn" element={<SignIn />} />
      <Route
        path="/videos"
        element={
          <Layout>
            <Videos />
          </Layout>
        }
      />
      <Route
        path="/videos/:id"
        element={
          <Layout>
            <Videos />
          </Layout>
        }
      />
      <Route
        path="/subscription"
        element={
          <Layout>
            <Subscription />
          </Layout>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

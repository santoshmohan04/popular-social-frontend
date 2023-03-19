import "./App.css";
import styled from "styled-components";
import Header from "./components/header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widget from "./components/Widget";
import { useEffect, useState } from "react";
import Login from "./components/Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    let userData: any = localStorage.getItem("user");
    let state_data = JSON.parse(userData);
    if (state_data) {
      const expirationDuration =
        new Date(state_data.user.stsTokenManager.expirationTime).getTime() -
        new Date().getTime();
      autoLogout(expirationDuration);
      dispatch(state_data);
    }
  }, []);

  const autoLogout = (expirationDuration: number) => {
    setTimeout(() => {
      localStorage.clear();
    }, expirationDuration);
  };

  return (
    <AppWrapper>
      {user ? (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widget />
          </div>
        </>
      ) : (
        <Login />
      )}
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  background-color: #f1f2f5;
  .app__body {
    display: flex;
  }
`;

export default App;

import React from "react";
import "./style.scss";

import Header from "../Header/Header";
import Container from "@mui/material/Container";

const Home = () => {
  return (
    <>
      <Container className="home-wrapper">
        <Header />
      </Container>
    </>
  );
};

export default Home;

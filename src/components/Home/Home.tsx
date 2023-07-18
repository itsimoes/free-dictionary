import React from "react";
import "./style.scss";
import Container from "@mui/material/Container";

import Header from "../Header/Header";
import Search from "../Search/Search";

const Home = () => {
  return (
    <>
      <Container className="home-wrapper">
        <Header />
        <Search />
      </Container>      
    </>
  );
};

export default Home;

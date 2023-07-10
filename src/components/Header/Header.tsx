import React from "react";
import "./style.scss";
import Container from "@mui/material/Container";
import SerifMenu from "./SerifMenu";
import Divider from "@mui/material/Divider";
import ThemeSwitcher from "./ThemeSwitcher";

//icons
import AutoStoriesTwoToneIcon from "@mui/icons-material/AutoStoriesTwoTone";


const Header = () => {
  return (
    <>
      <div className="header-wrapper">
        <AutoStoriesTwoToneIcon className="autoStoriesTwoToneIcon" />
        <div className="serif-menu">
          <SerifMenu />
          <Divider orientation="vertical" variant="middle" flexItem />
          <Container className="switcher">
            <ThemeSwitcher />          
          </Container>
        </div>
      </div>
    </>
  );
};

export default Header;

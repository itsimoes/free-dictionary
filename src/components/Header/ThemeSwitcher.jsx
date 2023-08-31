import React from "react";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";

const ThemeSwitcher = () => {
  const Android12Switch = styled(Switch)(({ theme }) => ({
    padding: 8,
    "& .MuiSwitch-track": {
      borderRadius: 22 / 2,
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "none",
      width: 16,
      height: 16,
      margin: 2,
    },
  }));

  var checked = "true";

  const SwitchThemes = () => {
    var theme = document.getElementById("root");
    var moonIcon = document.getElementById("BedtimeOutlinedIcon");
    var serifButton = document.getElementById("demo-customized-button");
    var html = document.getElementsByTagName("html");

    if (checked === "false") {
      console.log("light theme");
      checked = "true";
      theme.style.backgroundColor = "white";
      theme.style.color = "black";
      moonIcon.style.color = "grey";
      serifButton.style.color = "black";
      html[0].style.backgroundColor = "white";
    } else {
      console.log("dark theme");
      checked = "false";
      theme.style.backgroundColor = "black";
      theme.style.color = "white";
      moonIcon.style.color = "blueViolet";
      serifButton.style.color = "white";
      html[0].style.backgroundColor = "black";
    }
  };

  return (
    <>
      <FormControlLabel
        onChange={SwitchThemes}
        control={<Android12Switch />}
        label=""
        className="slider-switcher"
      />
      <BedtimeOutlinedIcon id="BedtimeOutlinedIcon" />
    </>
  );
};

export default ThemeSwitcher;

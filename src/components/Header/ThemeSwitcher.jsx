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
  return (
    <>
      <FormControlLabel
        control={<Android12Switch />}
        label=""
        className="slider-switcher"
      />
      <BedtimeOutlinedIcon />
    </>
  );
};

export default ThemeSwitcher;

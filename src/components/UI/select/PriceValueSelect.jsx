import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputBase from "@mui/material/InputBase";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    width: "50px",
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
      backgroundColor: theme.palette.background.paper,
    },
  },
}));

export default function PriceValueSelect() {
  const [calc, setCalc] = useState("G");

  const handleChange = (event) => {
    setCalc(event.target.value);
  };
  return (
    <FormControl sx={{ mt: "15px", ml: "35px", mb: "30px" }} variant="standard">
      <InputLabel id="demo-customized-select-label">Value</InputLabel>
      <Select
        labelId="demo-customized-select-label"
        id="demo-customized-select"
        value={calc}
        onChange={handleChange}
        input={<BootstrapInput />}
      >
        <MenuItem value={"G"}>GWEI</MenuItem>
        <MenuItem value={"E"}>ETH</MenuItem>
      </Select>
    </FormControl>
  );
}

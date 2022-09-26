import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputBase from "@mui/material/InputBase";
import { gwei, eth } from "../../../type/valueTypes";
import { useDispatch } from "react-redux";
import { setValueGraph } from "../../../store/action-creators/setValueGraph";

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
  const [state, setState] = useState("gwei");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setState(event.target.value);
    dispatch(setValueGraph(event.target.value));
  };
  return (
    <FormControl sx={{ mt: "15px", ml: "35px", mb: "30px" }} variant="standard">
      <InputLabel id="demo-customized-select-label">Value</InputLabel>
      <Select
        labelId="demo-customized-select-label"
        id="demo-customized-select"
        value={state}
        onChange={handleChange}
        input={<BootstrapInput />}
      >
        <MenuItem value={gwei}>GWEI</MenuItem>
        <MenuItem value={eth}>ETH</MenuItem>
      </Select>
    </FormControl>
  );
}

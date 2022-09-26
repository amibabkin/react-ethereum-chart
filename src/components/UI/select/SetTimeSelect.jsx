import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputBase from "@mui/material/InputBase";
import { useDispatch } from "react-redux";
import { setTimeGraph } from "../../../store/action-creators/setTimeGraph";
import {
  allTime,
  lastDay,
  lastMonth,
  lastThreeMonth,
} from "../../../type/timeTypes";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    width: "130px",
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

export default function SetTimeSelect() {
  const [state, setState] = useState("allTime");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setState(event.target.value);
    //диспатчим состояние в action-creator в setTimeGraph, который меняет состояние с помощью экшенов в setTimeReducer
    dispatch(setTimeGraph(event.target.value));
  };
  return (
    <FormControl sx={{ mt: "15px", ml: "35px", mb: "30px" }} variant="standard">
      <InputLabel id="demo-customized-select-label">Time frame</InputLabel>
      <Select
        labelId="demo-customized-select-label"
        id="demo-customized-select"
        value={state}
        onChange={handleChange}
        input={<BootstrapInput />}
      >
        <MenuItem value={allTime}>За всё время</MenuItem>
        <MenuItem value={lastDay}>За последний день</MenuItem>
        <MenuItem value={lastMonth}>За последний месяц</MenuItem>
        <MenuItem value={lastThreeMonth}>За последние три месяца</MenuItem>
      </Select>
    </FormControl>
  );
}

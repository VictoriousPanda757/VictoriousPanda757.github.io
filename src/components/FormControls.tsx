import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface Props {
  firstNameFilter: string;
  handleFirstNameFilter: (event: SelectChangeEvent) => void;
  lastNameFilter: string;
  handleLastNameFilter: (event: SelectChangeEvent) => void;
  stateFilter: string;
  handleStateFilter: (event: SelectChangeEvent) => void;
  firstNameSort: string;
  handleFirstNameSort: (event: SelectChangeEvent) => void;
}

export default function FormControls({
  firstNameFilter,
  handleFirstNameFilter,
  lastNameFilter,
  handleLastNameFilter,
  stateFilter,
  handleStateFilter,
  firstNameSort,
  handleFirstNameSort,
}: Props) {
  return (
    <>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-standard-label">
          Filter by First Name
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={firstNameFilter}
          onChange={handleFirstNameFilter}
          label="First Name Filter"
        >
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={1}>A-F</MenuItem>
          <MenuItem value={2}>G-L</MenuItem>
          <MenuItem value={3}>M-R</MenuItem>
          <MenuItem value={4}>S-Z</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-standard-label">
          Filter by Last Name
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={lastNameFilter}
          onChange={handleLastNameFilter}
          label="Last Name Filter"
        >
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={1}>A-F</MenuItem>
          <MenuItem value={2}>G-L</MenuItem>
          <MenuItem value={3}>M-R</MenuItem>
          <MenuItem value={4}>S-Z</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-standard-label">
          Filter by State
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={stateFilter}
          onChange={handleStateFilter}
          label="State Filter"
        >
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={1}>A-F</MenuItem>
          <MenuItem value={2}>G-L</MenuItem>
          <MenuItem value={3}>M-R</MenuItem>
          <MenuItem value={4}>S-Z</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-standard-label">
          Sort by First Name
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={firstNameSort}
          onChange={handleFirstNameSort}
          label="Sort by First Name"
        >
          <MenuItem value={0}>None</MenuItem>
          <MenuItem value={1}>Ascending</MenuItem>
          <MenuItem value={2}>Descending</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}

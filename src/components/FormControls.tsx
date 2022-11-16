import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface Props {
  firstNameFilter: string;
  setFirstNameFilter: React.Dispatch<React.SetStateAction<string>>;
  lastNameFilter: string;
  setLastNameFilter: React.Dispatch<React.SetStateAction<string>>;
  stateFilter: string;
  setStateFilter: React.Dispatch<React.SetStateAction<string>>;
  ageFilter: string;
  setAgeFilter: React.Dispatch<React.SetStateAction<string>>;
  firstNameSort: string;
  setFirstNameSort: React.Dispatch<React.SetStateAction<string>>;
}

export default function FormControls({
  firstNameFilter,
  setFirstNameFilter,
  lastNameFilter,
  setLastNameFilter,
  stateFilter,
  setStateFilter,
  ageFilter,
  setAgeFilter,
  firstNameSort,
  setFirstNameSort,
}: Props) {
  // functions to handle form changes
  const handleFirstNameFilter = (event: SelectChangeEvent) => {
    setFirstNameFilter(event.target.value);
  };
  const handleLastNameFilter = (event: SelectChangeEvent) => {
    setLastNameFilter(event.target.value);
  };
  const handleStateFilter = (event: SelectChangeEvent) => {
    setStateFilter(event.target.value);
  };
  const handleAgeFilter = (event: SelectChangeEvent) => {
    setAgeFilter(event.target.value);
  };
  const handleFirstNameSort = (event: SelectChangeEvent) => {
    setFirstNameSort(event.target.value);
  };
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
          Filter by Age
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={ageFilter}
          onChange={handleAgeFilter}
          label="Age Filter"
        >
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={1}>0-20</MenuItem>
          <MenuItem value={2}>21-40</MenuItem>
          <MenuItem value={3}>41-60</MenuItem>
          <MenuItem value={4}>61+</MenuItem>
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

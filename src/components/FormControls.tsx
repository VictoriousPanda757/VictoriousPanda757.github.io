import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";

interface Props {
  firstNameFilter: {
    firstNameAToF: boolean;
    firstNameGToL: boolean;
    firstNameMToR: boolean;
    firstNameSToZ: boolean;
  };
  handleFirstNameFilter: (event: React.ChangeEvent<HTMLInputElement>) => void;
  lastNameFilter: {
    lastNameAToF: boolean;
    lastNameGToL: boolean;
    lastNameMToR: boolean;
    lastNameSToZ: boolean;
  };
  handleLastNameFilter: (event: React.ChangeEvent<HTMLInputElement>) => void;
  stateFilter: {
    stateAToF: boolean;
    stateGToL: boolean;
    stateMToR: boolean;
    stateSToZ: boolean;
  };
  handleStateFilter: (event: React.ChangeEvent<HTMLInputElement>) => void;
  ageFilter: {
    age0To20: boolean;
    age21To40: boolean;
    age41To60: boolean;
    age61Plus: boolean;
  };
  handleAgeFilter: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
  ageFilter,
  handleAgeFilter,
  firstNameSort,
  handleFirstNameSort,
}: Props) {
  // Desctructure the filters
  const { firstNameAToF, firstNameGToL, firstNameMToR, firstNameSToZ } =
    firstNameFilter;
  const { lastNameAToF, lastNameGToL, lastNameMToR, lastNameSToZ } =
    lastNameFilter;
  const { stateAToF, stateGToL, stateMToR, stateSToZ } = stateFilter;
  const { age0To20, age21To40, age41To60, age61Plus } = ageFilter;
  return (
    <div className="form-container">
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Filter by First Name</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={firstNameAToF}
                onChange={handleFirstNameFilter}
                name="firstNameAToF"
              />
            }
            label="A-F"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={firstNameGToL}
                onChange={handleFirstNameFilter}
                name="firstNameGToL"
              />
            }
            label="G-L"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={firstNameMToR}
                onChange={handleFirstNameFilter}
                name="firstNameMToR"
              />
            }
            label="M-R"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={firstNameSToZ}
                onChange={handleFirstNameFilter}
                name="firstNameSToZ"
              />
            }
            label="S-Z"
          />
        </FormGroup>
      </FormControl>

      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Filter by Last Name</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={lastNameAToF}
                onChange={handleLastNameFilter}
                name="lastNameAToF"
              />
            }
            label="A-F"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={lastNameGToL}
                onChange={handleLastNameFilter}
                name="lastNameGToL"
              />
            }
            label="G-L"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={lastNameMToR}
                onChange={handleLastNameFilter}
                name="lastNameMToR"
              />
            }
            label="M-R"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={lastNameSToZ}
                onChange={handleLastNameFilter}
                name="lastNameSToZ"
              />
            }
            label="S-Z"
          />
        </FormGroup>
      </FormControl>

      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Filter by State</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={stateAToF}
                onChange={handleStateFilter}
                name="stateAToF"
              />
            }
            label="A-F"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={stateGToL}
                onChange={handleStateFilter}
                name="stateGToL"
              />
            }
            label="G-L"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={stateMToR}
                onChange={handleStateFilter}
                name="stateMToR"
              />
            }
            label="M-R"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={stateSToZ}
                onChange={handleStateFilter}
                name="stateSToZ"
              />
            }
            label="S-Z"
          />
        </FormGroup>
      </FormControl>

      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Filter by Age</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={age0To20}
                onChange={handleAgeFilter}
                name="age0To20"
              />
            }
            label="0-20"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={age21To40}
                onChange={handleAgeFilter}
                name="age21To40"
              />
            }
            label="21-40"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={age41To60}
                onChange={handleAgeFilter}
                name="age41To60"
              />
            }
            label="41-60"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={age61Plus}
                onChange={handleAgeFilter}
                name="age61Plus"
              />
            }
            label="61+"
          />
        </FormGroup>
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
    </div>
  );
}

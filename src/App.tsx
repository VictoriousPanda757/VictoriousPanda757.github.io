import { useEffect, useState } from "react";
import "./App.css";
import User from "./components/User";
import IUser from "./types/IUser";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Button } from "@mui/material";

function App() {
  // state to hold the user data
  const [userData, setUserData] = useState<IUser[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<IUser[]>([]);
  const [favoriteUsers, setFavoriteUsers] = useState<IUser[]>([]);

  // useEffect to fetch from user API https://randomuser.me/
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=30&nat=us")
      .then((response) => response.json())
      .then((data) => setUserData(data.results));
  }, []);

  // array to hold the filter values
  const filterFirstLetter: string[] = ["All", "A-F", "G-L", "M-R", "S-Z"];

  // state to hold the filter values
  const [firstNameFilter, setFirstNameFilter] = useState<string>("0");
  const [lastNameFilter, setLastNameFilter] = useState<string>("0");
  const [stateFilter, setStateFilter] = useState<string>("0");

  // state to hold the sort values
  const [firstNameSort, setFirstNameSort] = useState<string>("0");

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
  const handleFirstNameSort = (event: SelectChangeEvent) => {
    setFirstNameSort(event.target.value);
  };

  // useEffect to filter the user data based on filtering and sorting criteria
  useEffect(() => {
    let filteredUsers: IUser[] = [...userData];
    if (!userData.length) {
      console.log("Function returned");
      return;
    }
    // Filter by first name
    if (firstNameFilter !== "0") {
      filteredUsers = filteredUsers.filter((user) => {
        const lowerBound = filterFirstLetter[Number(firstNameFilter)].charAt(0);
        const upperBound = filterFirstLetter[Number(firstNameFilter)].charAt(2);
        return (
          user.name.first.charAt(0).toUpperCase() >= lowerBound &&
          user.name.first.charAt(0).toUpperCase() <= upperBound
        );
      });
    }
    // Filter by last name
    if (lastNameFilter !== "0") {
      filteredUsers = filteredUsers.filter((user) => {
        const lowerBound = filterFirstLetter[Number(lastNameFilter)].charAt(0);
        const upperBound = filterFirstLetter[Number(lastNameFilter)].charAt(2);
        return (
          user.name.last.charAt(0).toUpperCase() >= lowerBound &&
          user.name.last.charAt(0).toUpperCase() <= upperBound
        );
      });
    }
    // Filter by state
    if (stateFilter !== "0") {
      filteredUsers = filteredUsers.filter((user) => {
        const lowerBound = filterFirstLetter[Number(stateFilter)].charAt(0);
        const upperBound = filterFirstLetter[Number(stateFilter)].charAt(2);
        return (
          user.location.state.charAt(0).toUpperCase() >= lowerBound &&
          user.location.state.charAt(0).toUpperCase() <= upperBound
        );
      });
    }
    // Sort by first name
    if (Number(firstNameSort) !== 0) {
      filteredUsers = filteredUsers.sort((a, b) => {
        if (Number(firstNameSort) === 1) {
          return a.name.first > b.name.first ? 1 : -1;
        } else {
          return a.name.first < b.name.first ? 1 : -1;
        }
      });
    }
    setFilteredUsers(filteredUsers);
  }, [
    firstNameFilter,
    lastNameFilter,
    stateFilter,
    firstNameSort,
    userData,
    favoriteUsers,
  ]);

  // function to calculate the total age of all users added to favorites list
  const calculateTotalAge = () => {
    if (favoriteUsers.length === 0) {
      return 0;
    }
    let totalAge = 0;
    favoriteUsers.forEach((user) => {
      totalAge += user.dob.age;
    });
    return totalAge;
  };

  // function to calculate the number of females in the favorites list
  const calculateTotalFemales = () => {
    if (favoriteUsers.length === 0) {
      return 0;
    }
    let totalFemales = 0;
    favoriteUsers.forEach((user) => {
      if (user.gender === "female") {
        totalFemales++;
      }
    });
    return totalFemales;
  };

  return (
    <>
      <div className="ribbon">
        <img
          src="contacts-icon-bg.png"
          className="contacts-logo"
          alt="Contacts logo"
        />
        <span>MyContacts</span>
      </div>
      {!userData ? (
        <div>Loading...</div>
      ) : (
        <div className="button-container">
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

          <div className="app-container">
            <div className="user-container">
              <h1>Contact List</h1>
              <div className="user-item-container">
                {filteredUsers.map((user, index) => (
                  <User
                    user={user}
                    favoriteUsers={favoriteUsers}
                    setFavoriteUsers={setFavoriteUsers}
                    key={index}
                  />
                ))}
              </div>
            </div>

            <div className="favorites-container">
              <h1 className="favorites-container-header">Favorites</h1>
              <Button
                variant="contained"
                onClick={() => {
                  setFavoriteUsers([]);
                }}
              >
                Clear Favorites
              </Button>
              <div>
                <h2>Aggregated Data</h2>
                Total Favorites: {favoriteUsers.length}
                <br />
                Total Users: {userData.length}
                <br />
                Average Age of Favorites: {calculateTotalAge()}
                <br />
                Average Age of Favorites:{" "}
                {calculateTotalAge() > 0
                  ? calculateTotalAge() / favoriteUsers.length
                  : 0}
                <br />
                Total Number of Females in Favorites: {calculateTotalFemales()}
                <br />
                Total Number of Males in Favorites:{" "}
                {favoriteUsers.length - calculateTotalFemales()}
              </div>
              <div className="favorite-item-container">
                {favoriteUsers.map((user, index) => (
                  <User
                    user={user}
                    favoriteUsers={favoriteUsers}
                    setFavoriteUsers={setFavoriteUsers}
                    key={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;

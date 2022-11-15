import { SelectChangeEvent } from "@mui/material/Select";
import { useEffect, useState } from "react";
import "./App.css";
import Favorites from "./components/Favorites";
import FilteredList from "./components/FilteredList";
import FormControls from "./components/FormControls";
import IUser from "./types/IUser";

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

  // state to hold the filter values
  const [firstNameFilter, setFirstNameFilter] = useState<string>("0");
  const [lastNameFilter, setLastNameFilter] = useState<string>("0");
  const [stateFilter, setStateFilter] = useState<string>("0");
  const [ageFilter, setAgeFilter] = useState<string>("0");

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
  const handleAgeFilter = (event: SelectChangeEvent) => {
    setAgeFilter(event.target.value);
  };
  const handleFirstNameSort = (event: SelectChangeEvent) => {
    setFirstNameSort(event.target.value);
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
          <FormControls
            firstNameFilter={firstNameFilter}
            handleFirstNameFilter={handleFirstNameFilter}
            lastNameFilter={lastNameFilter}
            handleLastNameFilter={handleLastNameFilter}
            stateFilter={stateFilter}
            handleStateFilter={handleStateFilter}
            ageFilter={ageFilter}
            handleAgeFilter={handleAgeFilter}
            firstNameSort={firstNameSort}
            handleFirstNameSort={handleFirstNameSort}
          />
          <div className="app-container">
            <FilteredList
              userData={userData}
              firstNameFilter={firstNameFilter}
              lastNameFilter={lastNameFilter}
              stateFilter={stateFilter}
              ageFilter={ageFilter}
              firstNameSort={firstNameSort}
              filteredUsers={filteredUsers}
              setFilteredUsers={setFilteredUsers}
              favoriteUsers={favoriteUsers}
              setFavoriteUsers={setFavoriteUsers}
            />
            <Favorites
              favoriteUsers={favoriteUsers}
              setFavoriteUsers={setFavoriteUsers}
              userData={userData}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default App;

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
  const [firstNameFilter, setFirstNameFilter] = useState({
    firstNameAToF: false,
    firstNameGToL: false,
    firstNameMToR: false,
    firstNameSToZ: false,
  });
  const [lastNameFilter, setLastNameFilter] = useState({
    lastNameAToF: false,
    lastNameGToL: false,
    lastNameMToR: false,
    lastNameSToZ: false,
  });
  const [stateFilter, setStateFilter] = useState({
    stateAToF: false,
    stateGToL: false,
    stateMToR: false,
    stateSToZ: false,
  });
  const [ageFilter, setAgeFilter] = useState({
    age0To20: false,
    age21To40: false,
    age41To60: false,
    age61Plus: false,
  });

  // state to hold the sort values
  const [firstNameSort, setFirstNameSort] = useState<string>("0");

  // functions to handle form changes for filtering and sorting
  const handleFirstNameFilter = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFirstNameFilter({
      ...firstNameFilter,
      [event.target.name]: event.target.checked,
    });
  };
  const handleLastNameFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastNameFilter({
      ...lastNameFilter,
      [event.target.name]: event.target.checked,
    });
  };
  const handleStateFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStateFilter({
      ...stateFilter,
      [event.target.name]: event.target.checked,
    });
  };
  const handleAgeFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAgeFilter({
      ...ageFilter,
      [event.target.name]: event.target.checked,
    });
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

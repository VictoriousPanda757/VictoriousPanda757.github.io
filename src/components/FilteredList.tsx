import React, { useEffect } from "react";
import User from "./User";
import IUser from "../types/IUser";

interface Props {
  userData: IUser[];
  firstNameFilter: {
    firstNameAToF: boolean;
    firstNameGToL: boolean;
    firstNameMToR: boolean;
    firstNameSToZ: boolean;
  };
  lastNameFilter: {
    lastNameAToF: boolean;
    lastNameGToL: boolean;
    lastNameMToR: boolean;
    lastNameSToZ: boolean;
  };
  stateFilter: {
    stateAToF: boolean;
    stateGToL: boolean;
    stateMToR: boolean;
    stateSToZ: boolean;
  };
  ageFilter: {
    age0To20: boolean;
    age21To40: boolean;
    age41To60: boolean;
    age61Plus: boolean;
  };
  firstNameSort: string;
  filteredUsers: IUser[];
  setFilteredUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
  favoriteUsers: IUser[];
  setFavoriteUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
}

export default function FilteredList({
  userData,
  firstNameFilter,
  lastNameFilter,
  stateFilter,
  ageFilter,
  firstNameSort,
  filteredUsers,
  setFilteredUsers,
  favoriteUsers,
  setFavoriteUsers,
}: Props) {
  // array to hold the filter values
  const filterFirstLetter: string[] = ["A-F", "G-L", "M-R", "S-Z"];

  // useEffect to filter the user data based on filtering and sorting criteria
  useEffect(() => {
    let filteredUsers: IUser[] = [...userData];
    if (!userData.length) {
      console.log("Function returned");
      return;
    }

    // Filter by first name
    if (firstNameFilter.firstNameAToF) {
      filteredUsers = filteredUsers.filter((user) => {
        return (
          user.name.first[0].toLowerCase() >=
            filterFirstLetter[0].charAt(0).toLowerCase() &&
          user.name.first[0].toLowerCase() <=
            filterFirstLetter[0].charAt(2).toLowerCase()
        );
      });
    }
    if (firstNameFilter.firstNameGToL) {
      filteredUsers = filteredUsers.filter((user) => {
        return (
          user.name.first[0].toLowerCase() >=
            filterFirstLetter[1].charAt(0).toLowerCase() &&
          user.name.first[0].toLowerCase() <=
            filterFirstLetter[1].charAt(2).toLowerCase()
        );
      });
    }
    if (firstNameFilter.firstNameMToR) {
      filteredUsers = filteredUsers.filter((user) => {
        return (
          user.name.first[0].toLowerCase() >=
            filterFirstLetter[2].charAt(0).toLowerCase() &&
          user.name.first[0].toLowerCase() <=
            filterFirstLetter[2].charAt(2).toLowerCase()
        );
      });
    }
    if (firstNameFilter.firstNameSToZ) {
      filteredUsers = filteredUsers.filter((user) => {
        return (
          user.name.first[0].toLowerCase() >=
            filterFirstLetter[3].charAt(0).toLowerCase() &&
          user.name.first[0].toLowerCase() <=
            filterFirstLetter[3].charAt(2).toLowerCase()
        );
      });
    }

    // Filter by last name
    if (lastNameFilter.lastNameAToF) {
      filteredUsers = filteredUsers.filter((user) => {
        return (
          user.name.last[0].toLowerCase() >=
            filterFirstLetter[0].charAt(0).toLowerCase() &&
          user.name.last[0].toLowerCase() <=
            filterFirstLetter[0].charAt(2).toLowerCase()
        );
      });
    }
    if (lastNameFilter.lastNameGToL) {
      filteredUsers = filteredUsers.filter((user) => {
        return (
          user.name.last[0].toLowerCase() >=
            filterFirstLetter[1].charAt(0).toLowerCase() &&
          user.name.last[0].toLowerCase() <=
            filterFirstLetter[1].charAt(2).toLowerCase()
        );
      });
    }
    if (lastNameFilter.lastNameMToR) {
      filteredUsers = filteredUsers.filter((user) => {
        return (
          user.name.last[0].toLowerCase() >=
            filterFirstLetter[2].charAt(0).toLowerCase() &&
          user.name.last[0].toLowerCase() <=
            filterFirstLetter[2].charAt(2).toLowerCase()
        );
      });
    }
    if (lastNameFilter.lastNameSToZ) {
      filteredUsers = filteredUsers.filter((user) => {
        return (
          user.name.last[0].toLowerCase() >=
            filterFirstLetter[3].charAt(0).toLowerCase() &&
          user.name.last[0].toLowerCase() <=
            filterFirstLetter[3].charAt(2).toLowerCase()
        );
      });
    }

    // Filter by state
    if (stateFilter.stateAToF) {
      filteredUsers = filteredUsers.filter((user) => {
        return (
          user.location.state[0].toLowerCase() >=
            filterFirstLetter[0].charAt(0).toLowerCase() &&
          user.location.state[0].toLowerCase() <=
            filterFirstLetter[0].charAt(2).toLowerCase()
        );
      });
    }
    if (stateFilter.stateGToL) {
      filteredUsers = filteredUsers.filter((user) => {
        return (
          user.location.state[0].toLowerCase() >=
            filterFirstLetter[1].charAt(0).toLowerCase() &&
          user.location.state[0].toLowerCase() <=
            filterFirstLetter[1].charAt(2).toLowerCase()
        );
      });
    }
    if (stateFilter.stateMToR) {
      filteredUsers = filteredUsers.filter((user) => {
        return (
          user.location.state[0].toLowerCase() >=
            filterFirstLetter[2].charAt(0).toLowerCase() &&
          user.location.state[0].toLowerCase() <=
            filterFirstLetter[2].charAt(2).toLowerCase()
        );
      });
    }
    if (stateFilter.stateSToZ) {
      filteredUsers = filteredUsers.filter((user) => {
        return (
          user.location.state[0].toLowerCase() >=
            filterFirstLetter[3].charAt(0).toLowerCase() &&
          user.location.state[0].toLowerCase() <=
            filterFirstLetter[3].charAt(2).toLowerCase()
        );
      });
    }

    // Filter by age
    if (ageFilter.age0To20) {
      filteredUsers = filteredUsers.filter((user) => {
        return user.dob.age <= 20;
      });
    }
    if (ageFilter.age21To40) {
      filteredUsers = filteredUsers.filter((user) => {
        return user.dob.age >= 21 && user.dob.age <= 40;
      });
    }
    if (ageFilter.age41To60) {
      filteredUsers = filteredUsers.filter((user) => {
        return user.dob.age >= 41 && user.dob.age <= 60;
      });
    }
    if (ageFilter.age61Plus) {
      filteredUsers = filteredUsers.filter((user) => {
        return user.dob.age >= 61;
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
    ageFilter,
    firstNameSort,
    userData,
    favoriteUsers,
  ]);

  return (
    <div className="user-container">
      {filteredUsers.length > 0 ? (
        <>
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
        </>
      ) : (
        <>
          <h1>Contact List</h1>
          <div>No users found!</div>
        </>
      )}
    </div>
  );
}

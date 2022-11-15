import React, { useEffect } from "react";
import User from "./User";
import IUser from "../types/IUser";

interface Props {
  userData: IUser[];
  firstNameFilter: string;
  lastNameFilter: string;
  stateFilter: string;
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
  firstNameSort,
  filteredUsers,
  setFilteredUsers,
  favoriteUsers,
  setFavoriteUsers,
}: Props) {
  // array to hold the filter values
  const filterFirstLetter: string[] = ["All", "A-F", "G-L", "M-R", "S-Z"];

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

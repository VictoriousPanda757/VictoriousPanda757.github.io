import React from "react";
import { Button } from "@mui/material";
import IUser from "../types/IUser";
import User from "./User";

interface Props {
  favoriteUsers: IUser[];
  setFavoriteUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
  userData: IUser[];
}

export default function Favorites({
  favoriteUsers,
  setFavoriteUsers,
  userData,
}: Props) {
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
  );
}

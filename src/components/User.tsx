import React from "react";
import IUser from "../types/IUser";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Button } from "@mui/material";

interface Props {
  user: IUser;
  // onClick: (song: Song) => void;
  // label: string;
}

export default function User({ user }: Props) {
  const [isFavorite, setIsFavorite] = React.useState(false);

  const toggleFavorite = () => setIsFavorite((favorite) => !favorite);

  /**
   * Function to get the month as a string from the month number
   * @param monthNumber the month as a number
   * @returns the name of the month as a string
   */
  function getMonthName(monthNumber: number) {
    const date = new Date();
    date.setMonth(monthNumber - 1);
    return date.toLocaleString("en-US", { month: "short" });
  }

  /**
   * Function to format the date with a string month name
   * @param date the date to format
   * @returns the formatted date
   */
  const formatDate = (date: string) => {
    const year = date.substring(0, 4);
    const month = Number(date.substring(5, 7));
    const day = date.substring(8, 10);
    const stringMonth = getMonthName(month);
    return `${stringMonth} ${day}, ${year}`;
  };

  return (
    <div className="user-card">
      <img src={user.picture.large} alt="user" />
      <div className="user-text-container">
        <h1>
          {user.name.first} {user.name.last}
        </h1>
        <p>
          <strong>Phone:</strong> {user.phone}
          <br />
          <strong>Cell:</strong> {user.cell}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Birthday:</strong> {formatDate(user.dob.date)}
        </p>
        <p>
          <strong>Location:</strong> {user.location.street.number}{" "}
          {user.location.street.name}.
          <br />
          {user.location.city}, {user.location.state}
          <br />
          {user.location.country}, {user.location.postcode}
        </p>
        <Button variant="contained" onClick={toggleFavorite}>
          Add to Favorites
          {isFavorite ? (
            <FavoriteIcon className="favorite-icon" />
          ) : (
            <FavoriteBorderIcon className="favorite-icon" />
          )}
        </Button>
      </div>
    </div>
  );
}

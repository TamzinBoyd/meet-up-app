import React, { createContext, useState } from "react";
// set initial values of context
const FavouritesContext = createContext({
  favourites: [],
  totalFavourties: 0,
  addFavourite: (favouriteMeetup) => {},
  itemIsFAvourite: (meetupID) => {},
  removeFavourite: (meetupID) => {},
});

export const FavouritesContextProvider = (props) => {
  const [userFavourites, setUserFavourites] = useState([]);

  const addFavouriteHandler = (favouriteMeetup) => {
    //   takes previous state as parameter
    setUserFavourites((previous) => {
      // adds paramater of new meetUp to the existing state
      return previous.concat(favouriteMeetup);
    });
  };

  const removeFavouriteHandler = (meetupID) => {
    setUserFavourites((previous) => {
      return previous.filter(
        (meetup) =>
          // return "true" if want to keep, in which case meetID's don't match
          meetup.id !== meetupID
      );
    });
  };

  const itemIsFavouriteHandler = (meetupID) => {
    // returns true or false overall, if at least 1 item returns true or false then it will return true/false overall. So return true if a meetup has that id in favourites
    return userFavourites.some((meetup) => meetup.id === meetupID);
  };

  const context = {
    favourites: userFavourites,
    totalFavourties: userFavourites.length,
    addFavourite: addFavouriteHandler,
    removeFavourite: removeFavouriteHandler,
    itemIsFAvourite: itemIsFavouriteHandler,
  };

  return (
    <FavouritesContext.Provider value={context}>
      {props.children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesContext;

import React, { useContext } from "react";
import styles from "./MeetUpItem.module.css";
import Card from "../ui/Card";
import FavouritesContext from "../../store/favourites-context";

const MeetUpItem = (props) => {
  const favouritesCtx = useContext(FavouritesContext);

  const itemIsFAvourite = favouritesCtx.itemIsFAvourite(props.id);

  const toggleFavouritesHandler = () => {
    // check if item is alre
    // if so remove it from the list so toggle out of favourites
    if (itemIsFAvourite) {
      favouritesCtx.removeFavourite(props.id);
    } else {
      // creates meetup item to add to favourites list
      favouritesCtx.addFavourite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  };
  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={styles.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={styles.actions}>
          <button onClick={toggleFavouritesHandler}>
            {itemIsFAvourite ? "Remove from favourites" : "Add to favourites"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetUpItem;

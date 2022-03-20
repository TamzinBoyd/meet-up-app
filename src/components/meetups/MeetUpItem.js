import React from "react";
import styles from "./MeetUpItem.module.css";
import Card from "../ui/Card";

const MeetUpItem = (props) => {
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
          <button>Add to favourites</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetUpItem;

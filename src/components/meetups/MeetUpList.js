import React from "react";
import MeetUpItem from "./MeetUpItem";
import styles from "./MeetUpList.module.css";

const MeetUpList = (props) => {
  const { meetups } = props;
  return (
    //   create a list of meet ups by mapping over the array
    // pass in props
    <ul className={styles.list}>
      {meetups.map((item) => (
        <MeetUpItem
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          address={item.address}
          description={item.description}
        />
      ))}
    </ul>
  );
};

export default MeetUpList;

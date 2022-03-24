import React, { useState, useEffect } from "react";
import MeetUpList from "../components/meetups/MeetUpList";

const AllMeetUpsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetUps, setLoadedMeetUps] = useState([]);

  // get data from Firebase, which in turn saves data from the form. Only runs once when page loads
  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://meet-up-project-da5df-default-rtdb.europe-west1.firebasedatabase.app/meetups.json"
    )
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        const meetups = [];
        // go through all the keys in the data object
        for (const key in data) {
          // create the following for every key in the object
          const meetup = {
            id: key,
            // spread operator to copy key value pairs of the nester object into the key object
            ...data[key],
          };
          // pass into the new array so can map over later on
          meetups.push(meetup);
        }
        // once have data tell it we are no longer loading / waiting for the promise to return value and so show info on the page
        setIsLoading(false);
        // pass the returned data into meetUps
        setLoadedMeetUps(meetups);
      });
  }, []);

  // if promise hasn't yet been returned then load this page
  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetUpList meetups={loadedMeetUps} />
    </section>
  );
};

export default AllMeetUpsPage;

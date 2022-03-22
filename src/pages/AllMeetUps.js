import React, { useState } from "react";
import MeetUpList from "../components/meetups/MeetUpList";

const AllMeetUpsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetUps, setLoadedMeetUps] = useState([]);
  fetch(
    "https://meet-up-project-da5df-default-rtdb.europe-west1.firebasedatabase.app/meetups.json"
  )
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      // once have data tell it we are no longer loading / waiting for the promise to return value
      setIsLoading(false);
      setLoadedMeetUps(data);
    });

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

import React from "react";
import { useHistory } from "react-router-dom";

import NewMeetUpForm from "../components/meetups/NewMeetUpForm";

const NewMeetUpsPage = () => {
  const history = useHistory();

  const addMeetUpHandler = (meetUpData) => {
    fetch(
      "https://meet-up-project-da5df-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetUpData),
        headers: {
          "Content-Type": "application/json",
        },
      }.then(() => {
        history.replace("/");
      })
    );
  };
  return (
    <div>
      <section>
        <h1>Add new meet up</h1>
        <NewMeetUpForm onAddMeetUp={addMeetUpHandler} />
      </section>
    </div>
  );
};

export default NewMeetUpsPage;

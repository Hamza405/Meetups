import AddMeetupForm from "../components/meetups_components/AddMeetupForm";
function AddMeetupView() {
  function addMeetup(submitData) {
    // TODO: listen to result and show alert with it
    fetch("https://tishreen-62882-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(submitData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  return (
    <div>
      <AddMeetupForm addMeetup={addMeetup} />
    </div>
  );
}

export default AddMeetupView;

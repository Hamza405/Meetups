import AddMeetupForm from "../components/meetups_components/AddMeetupForm";
function AddMeetupView() {
  function addMeetup(submitData) {
    // fetch("https://tishreen-62882-default-rtdb.firebaseio.com/meetups.json");
  }
  return (
    <div>
      <AddMeetupForm addMeetup={addMeetup} />
    </div>
  );
}

export default AddMeetupView;

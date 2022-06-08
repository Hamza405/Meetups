import { Route, Routes } from "react-router-dom";
import MeetupsView from "./views/MeetupsView";
import FavoritesMeetups from "./views/FavoritesMeetups";
import AddMeetup from "./views/AddMeetup";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MeetupsView />} />
        <Route path="/add-meetup" element={<AddMeetup />} />
        <Route path="/favorites" element={<FavoritesMeetups />} />
      </Routes>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import MeetupsView from "./views/MeetupsView";
import FavoritesMeetups from "./views/FavoritesMeetups";
import AddMeetup from "./views/AddMeetup";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation />
      <div>
        <Routes>
          <Route path="/" element={<MeetupsView />} />
          <Route path="/add-meetup" element={<AddMeetup />} />
          <Route path="/favorites" element={<FavoritesMeetups />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

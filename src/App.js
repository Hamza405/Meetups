import { Route, Routes } from "react-router-dom";
import MeetupsView from "./views/MeetupsView";
import FavoritesMeetups from "./views/FavoritesMeetups";
import AddMeetup from "./views/AddMeetup";
import MainLayout from "./components/layout/MainLayout";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<MeetupsView />} />
        <Route path="/add-meetup" element={<AddMeetup />} />
        <Route path="/favorites" element={<FavoritesMeetups />} />
      </Routes>
    </MainLayout>
  );
}

export default App;

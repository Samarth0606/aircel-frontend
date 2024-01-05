import "./App.css";
import dummy_data from "./Data";
import { Route, Routes } from "react-router-dom";
import Mobile from "./Mobile";
import Calldetail from "./Calldetail";
import Archieved from "./Archieved";
import Inbox from "./Inbox";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Mobile />} />
      <Route path="/inbox" element={<Inbox />} />
      <Route path="/:id" element={<Calldetail />} />
      <Route path="/archived" element={<Archieved />} />
    </Routes>
  );
}

export default App;

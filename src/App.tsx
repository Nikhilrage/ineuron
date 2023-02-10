import React from "react";
//import { Routes, Route } from "react-router-dom";
import Sidebar from "./atoms/button/Sidebar/Sidebar";
import ChooseSeat from "./components/seatLayout/SeatLayout";
import MoviesList from "./components/MoviesList";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import { PathNames } from "./routes/PathNames";
import RouteController from "./routes/RouteController";

function App() {
  return (
    <div className="flex flex-row">
      <Sidebar />
      {/*<Routes>
        <Route path={PathNames.WELCOME_PAGE} element={<WelcomePage />} />
        <Route path={PathNames.MOVIES} element={<MoviesList />} />
        <Route path={PathNames.SELECT_SEATS} element={<ChooseSeat />} />
      </Routes>*/}
      <RouteController />
    </div>
  );
}

export default App;

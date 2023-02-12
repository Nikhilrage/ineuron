import { Route, Routes } from "react-router-dom";
import WelcomePage from "../components/WelcomePage/WelcomePage";
import Movies from "../components/Movies/Movies";
import ShowTimings from "../components/ShowTimings/ShowTimings";
import ChooseSeat from "../components/seatLayout/SeatLayout";
import PaymentPage from "../components/PaymentPage/PaymentPage";
import { PathNames } from "./PathNames";

const RouteController = () => {
  return (
    <Routes>
      <Route path={PathNames.WELCOME_PAGE} element={<WelcomePage />} />
      <Route path={PathNames.MOVIES} element={<Movies />} />
      <Route path={`${PathNames.SHOW_TIMINGS}/:id`} element={<ShowTimings />} />
      <Route
        path={`${PathNames.SELECT_SEATS}/:movieId/:theatreName/:screenNo`}
        element={<ChooseSeat />}
      />
      <Route path={PathNames.USER_DETAILS} element={<PaymentPage />} />
    </Routes>
  );
};
export default RouteController;

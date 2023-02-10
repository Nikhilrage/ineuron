//import { Route, Routes } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import ChooseSeat from "../components/seatLayout/SeatLayout";
import Movies from "../components/MoviesList";
import PaymentPage from "../components/PaymentPage/PaymentPage";
import WelcomePage from "../components/WelcomePage/WelcomePage";
import { PathNames } from "./PathNames";
type PublicRouteProps = {
  component?: React.ComponentType;
  path?: string;
};
const RouteController = (props: PublicRouteProps) => {
  return (
    <Routes>
      <Route path={PathNames.WELCOME_PAGE} element={<WelcomePage />} />
      <Route path={PathNames.MOVIES} element={<Movies />} />
      <Route path={PathNames.SELECT_SEATS} element={<ChooseSeat />} />
      <Route path={PathNames.USER_DETAILS} element={<PaymentPage />} />
    </Routes>
  );
};
export default RouteController;

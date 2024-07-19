import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import IsAuthenticated from "./IsAuthenticated";
import DestinationsPage from "./pages/destinations/DestinationsPage";
import Admin from "./pages/admin/Admin";
import Location from "./pages/location/Location";
import Bookings from "./pages/bookings/Bookings";

function App() {
  return (
    <div>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route path="/" element={<IsAuthenticated />}>
          <Route path="/" element={<Home />} />
          <Route path="/places" element={<DestinationsPage />} />
          <Route path="/places/:details" element={<Location />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

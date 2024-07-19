import { userState } from "../context/userContext";
import { AiOutlineLogout } from "react-icons/ai";
import { useRequestApi } from "../libs/useApi";
import { NavLink, useNavigate } from "react-router-dom";
import { successToast } from "../libs/toast-messages";

const Navbar = () => {
  const navigate = useNavigate();
  const user = userState();
  
  let userDetails;
  let initailLetter;

  if (user?.user?.username) {
    userDetails = user.user;
    initailLetter = userDetails.username.substring(0, 1);
  }

  const logout = async () => {
    const response = await useRequestApi("/users/logout", "get");

    if (response?.status == 200) {
      user.setUser(null);
      successToast(response.data.message);
      navigate("/login");
    }
  };

  return (
    <div className="bg-coral-red flex justify-between items-center px-8 py-6">
      <div className="font-palanquin text-2xl font-semibold text-slate-200">
        <NavLink to="/">👻-Tourism</NavLink>
      </div>
      <div className="flex justify-between items-center gap-10">
        {userDetails?.isAdmin && (
          <NavLink
            to="/admin"
            className="active px-4 py-2 rounded-md text-coral-red font-montserrat text-xl bg-white hover:opacity-80"
          >
            Admin
          </NavLink>
        )}
        <NavLink
          to="/places"
          className="active px-4 py-2 rounded-md text-coral-red font-montserrat text-xl bg-white hover:opacity-80"
        >
          Places
        </NavLink>
        <NavLink
          to="/bookings"
          className="active px-4 py-2 rounded-md text-coral-red font-montserrat text-xl bg-white hover:opacity-80"
        >
          Bookings
        </NavLink>
      </div>
      <div
        className={
          userDetails?.username
            ? "flex justify-between items-center gap-10"
            : "hidden"
        }
      >
        <span
          className="px-4 py-3 rounded-full bg-white-400 text-coral-red text-lg font-bold text-center cursor-pointer"
          title={userDetails?.email}
        >
          {initailLetter && initailLetter}
        </span>
        <span className="cursor-pointer" onClick={logout}>
          <AiOutlineLogout size={30} color="white" />
        </span>
      </div>
    </div>
  );
};

export default Navbar;

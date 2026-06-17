import { Link } from "react-router";
import {
  FacebookLogo,
  FriendsIcon,
  HomeIcon,
  MenuIcon,
  MessengerIcon,
  NotificationIcon,
  PlayIcon,
  SearchIcon,
  ShopIcon,
} from "../icons";
import useUserStore from "../stores/userStore";
import Avatar from "./Avatar";

function Header() {
  const user = useUserStore((state) => state.user);
  const logout = useUserStore((state) => state.logout);
  return (
    <div className="h-14 px-3 w-full shadow-lg bg-white fixed top-0 z-10 flex justify-between">
      {/* search bar */}
      <div className="flex-1 flex gap-2 items-center pe-2">
        <FacebookLogo className="w-12" />
        <label className="input rounded-full max-w-[250px]">
          <input type="search" placeholder="Search" />
          <SearchIcon />
        </label>
      </div>

      {/* navigator */}
      <div className="flex-1 flex gap-2 justify-center pe-2">
        <Link
          to="/"
          className="flex justify-center w-20 hover:outline-2 hover:outline-blue-900"
        >
          <HomeIcon className="w-1/2" />
        </Link>
        <Link
          to="/"
          className="flex justify-center w-20 hover:outline-2 hover:outline-blue-900"
        >
          <PlayIcon className="w-1/2" />
        </Link>
        <Link
          to="/"
          className="flex justify-center w-20 hover:outline-2 hover:outline-blue-900"
        >
          <ShopIcon className="w-1/2" />
        </Link>
        <Link
          to="/"
          className="flex justify-center w-20 hover:outline-2 hover:outline-blue-900"
        >
          <FriendsIcon className="w-1/2" />
        </Link>
      </div>

      {/* Right menu */}
      <div className="flex-1 flex gap-3 items-center justify-end ">
        <div className="avatar justify-center items-center">
          <div className="w-10 h-10 rounded-full flex! justify-center items-center bg-gray-300">
            <MenuIcon className="w-5" />
          </div>
        </div>
        <div className="avatar justify-center items-center">
          <div className="w-10 h-10 rounded-full flex! justify-center items-center bg-gray-300">
            <MessengerIcon className="w-5" />
          </div>
        </div>
        <div className="avatar justify-center items-center">
          <div className="w-10 h-10 rounded-full flex! justify-center items-center bg-gray-300">
            <NotificationIcon className="w-5" />
          </div>
        </div>
        <div className="dropdown dropdown-end ">
          <div tabIndex={0} role="button" className="btn m-1 btn-circle">
            <Avatar imgSrc={user.profileImage} menu bottom="-9px" />
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-200 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              {user.firstName}
              {user.lastName}
            </li>
            <div className="divider mt-1 mb-1"></div>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/friends">Friends</Link>
            </li>
            <div className="divider h-1"></div>
            <li>
              <a onClick={logout}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;

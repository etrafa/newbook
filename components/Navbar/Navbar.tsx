import DefaultProfilePicture from "../../assets/images/default_profile_picture.png";
import Image from "next/image";
import {
  HomeIcon,
  MessageBoxIcon,
  MoonIcon,
  NotificationBellIcon,
  ProfileIcon,
  SearchIcon,
  SquareIcon,
  SunIcon,
} from "../../assets/Icons/NavbarIcons";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [currentTheme, setCurrentTheme] = useState("light");

  const changeTheme = () => {
    console.log(currentTheme);
    setCurrentTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <nav className="w-full border-b h-16 flex justify-evenly items-center lg:justify-between">
      <div className="flex justify-evenly lg:justify-between lg:items-center w-full lg:w-6/12 lg:mx-12">
        <h2 className="text-xl lg:text-2xl text-blue-600 font-bold tracking-widest cursor-pointer">
          newbook
        </h2>
        <HomeIcon />
        {currentTheme === "light" ? (
          <MoonIcon changeTheme={changeTheme} />
        ) : (
          <SunIcon changeTheme={changeTheme} />
        )}
        <SquareIcon />
        <div className="w-8 h-8 lg:w-6/12 border rounded-md shadow-md lg:shadow-none flex justify-center lg:justify-start items-center">
          <SearchIcon />
          <input
            className="hidden lg:block lg:w-full lg:h-full lg:ml-2 appearance-none"
            type="search"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="hidden lg:flex lg:justify-evenly lg:w-2/12 lg:mx-12">
        <ProfileIcon />
        <MessageBoxIcon />
        <NotificationBellIcon />
        <Image
          src={DefaultProfilePicture}
          width={25}
          height={25}
          alt="default profile picture"
        />
      </div>
    </nav>
  );
};
export default Navbar;

import AddIcon from "@/components/ui/icons/AddIcon";
import MoreIcon from "@/components/ui/icons/MoreIcon";
import { AppDispatch, logout, resetContacts } from "@/store";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

const HomeActions = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const menuRef = useRef<HTMLDivElement | null>(null);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (showMenu) {
      if (menuRef.current) {
        menuRef.current.focus();
      }
    }
  }, [showMenu]);

  const handleAddClick = () => {};

  const handleMoreClick = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setTimeout(() => {
      setShowMenu(false);
    }, 1000);
  };

  const handleLogoutClick = () => {
    dispatch(resetContacts());
    dispatch(logout());
  };

  return (
    <div className="flex max-w-screen-xl w-screen justify-end gap-6 items-center relative">
      <button onClick={handleMoreClick}>
        <MoreIcon />
      </button>
      <Link href="/contact/new" onClick={handleAddClick}>
        <AddIcon />
      </Link>
      <div
        ref={menuRef}
        className={`absolute shadow-md top-full right-20 bg-box-background-color ${
          showMenu ? "scale-100" : "scale-0"
        } transition-all origin-top-right`}
        tabIndex={-1}
        onBlur={hideMenu}
      >
        <button
          className="text-xl font-semibold py-2 px-6  hover:bg-gray-100"
          onClick={handleLogoutClick}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default HomeActions;

import AddIcon from "@/components/ui/icons/AddIcon";
import MoreIcon from "@/components/ui/icons/MoreIcon";
import DefaultLayout from "@/layouts/DefaultLayout";
import { AppDispatch, logout } from "@/store";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

export default function Home() {
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
    }, 100);
  };

  const handleLogoutClick = () => {
    dispatch(logout());
  };

  return (
    <DefaultLayout>
      <div className="px-24 py-8">
        <div className="flex justify-end gap-6 items-center relative">
          <button onClick={handleMoreClick}>
            <MoreIcon />
          </button>
          <button onClick={handleAddClick}>
            <AddIcon />
          </button>
          <div
            ref={menuRef}
            className={`absolute top-full right-20 bg-box-background-color p-2 ${
              showMenu ? "scale-100" : "scale-0"
            } transition-all origin-top-right`}
            tabIndex={-1}
            onBlur={hideMenu}
          >
            <button
              className="text-xl font-semibold hover:bg"
              onClick={handleLogoutClick}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

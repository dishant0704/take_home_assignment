import { useEffect, useState, useLayoutEffect } from "react";

// import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser } from "@fortawesome/free-regular-svg-icons";

import ToggleBtn from "./ToggleBtn";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { changeMode } from "../features/ModeReducer"; 

const Header = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.mode);
  useLayoutEffect(() => {
    const storedValue = localStorage.getItem("darkMode");
    if (storedValue !== null) {
      const localData: boolean = JSON.parse(storedValue);
      dispatch(changeMode(localData))     
    }    
  }, []);

  useEffect(() => {
    if (mode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(mode));
  }, [mode]);

  const toggleDarkMode = () => { 
    dispatch(changeMode(!mode));
  };
console.log("mode: ",mode)
  return (
    <header className="flex justify-between items-center">
      <input
        type="text"
        placeholder="Search Crypto"
        className="dark:darkInput border rounded-lg px-4 py-2 w-64 text-sm focus:outline-none "
      />
      <div className="flex items-center gap-8">
        <ToggleBtn fun={toggleDarkMode} checked={mode} />
        <div className="notification hover:notification-hover">
          <FontAwesomeIcon icon={faBell} />
        </div>
        <div className="proFileWrapper">
          <div className="proImg">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div>
            <p className="font-medium">Shivani Chauhan</p>
            <p className="text-xs text-gray-500">Pro Account</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import "./TopBar.css";
import { changeShowSidebar } from "../../../global-redux/reducers/common/slice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import {
  faArrowLeft,
  faArrowRight,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const TopBar = () => {
  const dispatch = useDispatch();

  return (
    <header className="app-header shadow-sm mb-3 px-0 ">
      <nav className="navbar navbar-expand-lg navbar-light  navbarWrapMain">
        <div className="d-flex gap-4">
          <div
            className="cursor-pointer"
            onClick={() => dispatch(changeShowSidebar(false))}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => dispatch(changeShowSidebar(true))}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
        <div className="collapse navbar-collapse justify-content-end">
          <div className="d-flex align-items-center justify-content-between">
            <div
              className="cursor-pointer"
              onClick={() => dispatch(changeShowSidebar(false))}
            >
              <FontAwesomeIcon icon={faXmark} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default TopBar;

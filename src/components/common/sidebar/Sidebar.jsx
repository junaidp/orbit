import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import {
  changeActiveLink,
  changeExpanded,
} from "../../../global-redux/reducers/common/slice";

import SmallScreenSidebar from "./SmallScreenSidebar";

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { showSidebar, menuItems, activeLink } = useSelector(
    (state) => state?.common
  );
  const [isWidthLessThan990, setIsWidthLessThan990] = useState(
    window.innerWidth < 990
  );

  function handleMainItemClick(link, id) {
    if (link) {
      navigate(link);
    }
    dispatch(changeActiveLink(id));

    if (id === "company") {
      dispatch(changeExpanded("company"));
    }
  }

  function handleSubItemClick(link, id) {
    navigate(link);
    dispatch(changeActiveLink(id));
  }

  useEffect(() => {
    function handleResize() {
      setIsWidthLessThan990(window.innerWidth < 990);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div
        className={`${!showSidebar ? "page-wrapper-closed" : "page-wrapper"} `}
        id="bigScreenSideBar"
        data-theme="blue_theme"
        data-layout="vertical"
        data-sidebartype="full"
        data-sidebar-position="fixed"
        data-header-position="fixed"
      >
        <div className="left-sidebar">
          <div className="min-h-100">
            <nav
              className="sidebar-nav scroll-sidebar mt-1 pt-4"
              data-simplebar=""
            >
              <ul id="sidebarnav" className="mt-5">
                {menuItems?.map((item, index) => {
                  return (
                    <div key={index}>
                      <div
                        className={
                          activeLink !== item?.id
                            ? "link-wrap"
                            : "link-wrap-active"
                        }
                        onClick={() =>
                          handleMainItemClick(item?.route, item?.id)
                        }
                      >
                        <FontAwesomeIcon icon={item?.icon} />
                        <ul>
                          <li>
                            <a>
                              <span>{item?.label}</span>
                            </a>
                          </li>
                        </ul>
                        {item?.id === "company" && (
                          <i
                            className="fa fa-angle-down cheveron-icon"
                            id={item?.open ? "animate" : "non-animate"}
                            aria-hidden="true"
                          ></i>
                        )}
                      </div>
                      {item?.subMenu &&
                        item?.subMenu?.map((subItem) => {
                          return (
                            <div
                              key={subItem?.id}
                              className={`sub-link-wrap ${
                                item?.open === false && "sub-link-wrap-close"
                              }`}
                              onClick={() =>
                                handleSubItemClick(subItem?.route, subItem?.id)
                              }
                            >
                              <div
                                className={
                                  activeLink !== subItem?.id
                                    ? "link-wrap"
                                    : "link-wrap-active"
                                }
                              >
                                <FontAwesomeIcon icon={subItem?.icon} />
                                <ul>
                                  <li>
                                    <a>
                                      <span>{subItem?.label}</span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {isWidthLessThan990 && (
        <div className="smallScreenSidebar">
          <SmallScreenSidebar />
        </div>
      )}
    </div>
  );
};

export default Sidebar;

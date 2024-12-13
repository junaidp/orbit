import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { changeActiveLink } from "../../../global-redux/reducers/common/slice";

import SmallScreenSidebar from "./SmallScreenSidebar";

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isWidthLessThan990, setIsWidthLessThan990] = useState(
    window.innerWidth < 990
  );
  const [expandedSections, setExpandedSections] = useState({});
  const { showSidebar, activeLink, menuItems } = useSelector(
    (state) => state.common
  );

  useEffect(() => {
    function handleResize() {
      setIsWidthLessThan990(window.innerWidth < 990);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleToggleExpand = (id) => {
    setExpandedSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

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
                {menuItems?.map((item, index) => (
                  <div key={index}>
                    {/* Parent Menu Item */}
                    <div
                      className={
                        activeLink !== item?.id
                          ? "link-wrap"
                          : "link-wrap-active"
                      }
                      onClick={() => {
                        if (item?.children) {
                          handleToggleExpand(item?.id);
                        } else {
                          dispatch(changeActiveLink(item?.id));
                          navigate(item?.route);
                        }
                      }}
                    >
                      <FontAwesomeIcon icon={item?.icon} />
                      <ul>
                        <li>
                          <a>
                            <span>{item?.label}</span>
                            {item?.children && (
                              <span className="expand-icon">
                                {expandedSections[item?.id] ? "▼" : "▶"}
                              </span>
                            )}
                          </a>
                        </li>
                      </ul>
                    </div>

                    {/* Sub-menu Items */}
                    {item?.children && expandedSections[item?.id] && (
                      <ul className="sub-menu">
                        {item.children.map((child) => (
                          <li
                            key={child.id}
                            className={
                              activeLink === child.id
                                ? "sub-menu-item-active"
                                : "sub-menu-item"
                            }
                            onClick={() => {
                              dispatch(changeActiveLink(child.id));
                              navigate(child.route);
                            }}
                          >
                            {child.label}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
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

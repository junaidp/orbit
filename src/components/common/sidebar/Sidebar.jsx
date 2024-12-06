import React from "react";
import "./Sidebar.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SmallScreenSidebar from "./SmallScreenSidebar";
const Sidebar = () => {
  const [isWidthLessThan990, setIsWidthLessThan990] = React.useState(
    window.innerWidth < 990
  );
  let { showSidebar, activeLink, menuItems } = useSelector(
    (state) => state.common
  );

  React.useEffect(() => {
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
                {menuItems?.slice(-2)?.map((item, index) => {
                  return (
                    <div key={index}>
                      <div
                        className={
                          activeLink !== item?.id
                            ? "link-wrap"
                            : "link-wrap-active"
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
                      </div>
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

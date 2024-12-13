import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { useDetectClickOutside } from "react-detect-click-outside";
import "./Sidebar.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import {
  changeActiveLink,
  changeExpanded,
} from "../../../global-redux/reducers/common/slice";

export default function SmallScreenSidebar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let { activeLink, menuItems, drawerState } = useSelector(
    (state) => state.common
  );
  const [open, setOpen] = React.useState(false);

  const [isWidthLessThan990, setIsWidthLessThan990] = React.useState(
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

  React.useEffect(() => {
    function handleResize() {
      setIsWidthLessThan990(window.innerWidth < 990);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleDrawer = () => {
    setOpen(false);
  };
  const userRef = useDetectClickOutside({
    onTriggered: toggleDrawer,
  });

  React.useEffect(() => {
    setOpen(true);
  }, [drawerState]);

  const DrawerList = (
    <Box sx={{ width: 285 }} role="presentation" ref={userRef}>
      <div className="left-sidebar" style={{ marginTop: "-50px" }}>
        <div className="min-h-100">
          <nav
            className="sidebar-nav scroll-sidebar mt-4 pt-4"
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
                      onClick={() => handleMainItemClick(item?.route, item?.id)}
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
    </Box>
  );

  return (
    <div>
      <Drawer open={open}>{DrawerList}</Drawer>
    </div>
  );
}

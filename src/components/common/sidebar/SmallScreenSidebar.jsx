import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { useDetectClickOutside } from "react-detect-click-outside";
import "./Sidebar.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SmallScreenSidebar() {
  let { activeLink, menuItems, drawerState } = useSelector(
    (state) => state.common
  );
  const [open, setOpen] = React.useState(false);

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
    </Box>
  );

  return (
    <div>
      <Drawer open={open}>{DrawerList}</Drawer>
    </div>
  );
}

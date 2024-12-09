import { createSlice } from "@reduxjs/toolkit";
import { faBuilding, faFilter } from "@fortawesome/free-solid-svg-icons";

let menuItems = [
  {
    id: "home",
    label: "Company Setup",
    icon: faBuilding,
    route: "/",
    active: true,
  },
  {
    id: "incentive-setup",
    label: "Incentive Setup",
    icon: faFilter,
    route: "/incentive-setup",
    active: true,
  },
];

const initialState = {
  showSidebar: true,
  activeLink: "home",
  activeExpandId: "li-audit",
  menuItems: menuItems,
  drawerState: false,
};

export const slice = createSlice({
  name: "common",
  initialState,
  reducers: {
    changeShowSidebar: (state, action) => {
      state.showSidebar = action.payload;
      if (action.payload) {
        state.drawerState = !state.drawerState;
      }
    },

    changeActiveLink: (state, action) => {
      state.activeLink = action.payload;
    },
    InitialLoadSidebarActiveLink: (state, action) => {
      state.menuItems = state.menuItems.map((item) =>
        item?.id === action.payload ? { ...item, open: true } : item
      );
    },
  },
});

export const {
  changeShowSidebar,
  changeActiveLink,
  InitialLoadSidebarActiveLink,
} = slice.actions;

export default slice.reducer;

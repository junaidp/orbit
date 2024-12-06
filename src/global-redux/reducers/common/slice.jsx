import { createSlice } from "@reduxjs/toolkit";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";

let menuItems = [
  {
    id: "li-home",
    label: "Company Setup",
    icon: faBuilding,
    route: "/",
    active: true,
  },
];

const initialState = {
  showSidebar: true,
  activeLink: "li-home",
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
  },
});

export const { changeShowSidebar } = slice.actions;

export default slice.reducer;

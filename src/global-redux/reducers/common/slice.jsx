import { createSlice } from "@reduxjs/toolkit";
import {
  faBuilding,
  faFilter,
  faUpload,
  faFile,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

let menuItems = [
  {
    id: "incentive-setup",
    label: "Incentive Setup",
    icon: faFilter,
    route: "/incentive-setup",
    active: true,
  },
  {
    id: "file-upload",
    label: "File Upload",
    icon: faUpload,
    route: "/file-upload",
    active: true,
  },
  {
    id: "referral-form",
    label: "Referral Form",
    icon: faFile,
    route: "/referral-form",
    active: true,
  },
  {
    id: "company",
    label: "Company",
    icon: faBuilding,
    active: true,
    open: false,
    subMenu: [
      {
        id: "company-setup-1",
        label: "Company Setup1",
        icon: faHouse,
        route: "/company-setup-1",
        active: false,
      },
      {
        id: "company-setup",
        label: "Company Setup",
        icon: faBuilding,
        route: "/",
        active: false,
      },
    ],
  },
];

const initialState = {
  showSidebar: true,
  activeLink: "home",
  activeExpandId: "",
  menuItems: menuItems,
  drawerState: false,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
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
    changeExpanded: (state, action) => {
      state.activeExpandId = action.payload;
      if (action.payload === "company") {
        state.menuItems = state.menuItems.map((all) => {
          return all?.id === "company" ? { ...all, open: !all?.open } : all;
        });
      }
    },
  },
});

export const {
  changeShowSidebar,
  changeExpanded,
  changeActiveLink,
  InitialLoadSidebarActiveLink,
} = sidebarSlice.actions;

export default sidebarSlice.reducer;

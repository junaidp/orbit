import { createSlice } from "@reduxjs/toolkit";
import { faBuilding, faFilter } from "@fortawesome/free-solid-svg-icons";

let menuItems = [
 
  {
    id: "incentive-setup",
    label: "Incentive Setup",
    icon: faFilter,
    route: "/incentive-setup",
    active: true,
  },
  {
    id: "FileUpload",
    label: "File Upload",
    icon: faFilter,
    route: "/FileUpload",
    active: true,
  },
  {
    id: "Referral Form",
    label: "Referral Form",
    icon: faFilter,
    route: "/ReferralForm",
    active: true,
  },

  {
    id: "Company",
    label: "Company",
    icon: faFilter,
    route: "/company",
    active: true,
    children: [
      {
        id: "CompnySetup1",
        label: "Company Setup1",
        icon: faFilter,
        route: "/CompnySetup1",
        active: true,
      },
      {
        id: "home",
        label: "Company Setup",
        icon: faBuilding,
        route: "/",
        active: true,
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
    toggleExpand: (state, action) => {
      state.activeExpandId = state.activeExpandId === action.payload ? "" : action.payload;
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
  toggleExpand,
  InitialLoadSidebarActiveLink,
} = sidebarSlice.actions;

export default sidebarSlice.reducer;

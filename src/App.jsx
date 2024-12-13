import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/common/not-found/index";
import Home from "./pages/home";
import Layout from "./components/common/layout/Layout";
import IncentiveSetup from "./pages/incentive-setup";
import FileUpload from "./pages/FileUpload";
import ReferralForm from "./pages/ReferralForm";
import CompnySetup1 from "./pages/CompnySetup1";

import {
  changeActiveLink,
  InitialLoadSidebarActiveLink,
} from "./global-redux/reducers/common/slice";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const { menuItems } = useSelector((state) => state?.common);

  useEffect(() => {
    const mainActiveLink = menuItems?.find(
      (item) => item?.route === window.location.pathname
    );
    if (mainActiveLink) {
      dispatch(changeActiveLink(mainActiveLink?.id));
    }
    if (!mainActiveLink) {
      const filteredItems = menuItems?.filter((item) => item?.subMenu);
      filteredItems.forEach((element) => {
        element?.subMenu?.forEach((subItem) => {
          if (subItem.route === window.location.pathname) {
            dispatch(changeActiveLink(subItem.id));
            dispatch(InitialLoadSidebarActiveLink(element?.id));
          }
        });
      });
    }
  }, [dispatch]);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" index element={<Home />} />
            <Route path="/incentive-setup" index element={<IncentiveSetup />} />
            <Route path="/FileUpload" index element={<FileUpload />} />
            <Route path="/file-upload" component={FileUpload} />
            <Route path="/ReferralForm" index element={<ReferralForm />} />
            <Route path="/CompnySetup1" index element={<CompnySetup1 />} />

          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

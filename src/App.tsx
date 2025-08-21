import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import RenderWithSuspense from "./wrappers/RenderWithSuspense";

const HomePage = React.lazy(() => import("./pages/Index"));

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <RenderWithSuspense>
                <Layout />
              </RenderWithSuspense>
            }
          >
            <Route index element={<HomePage />} />
            {/* <Route path="about" element={<About />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="login" element={<LoginPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;

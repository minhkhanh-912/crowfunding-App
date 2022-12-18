import LayoutDashboard from "layout/LayoutDashboard";
import CampaignView from "modules/campaign/CampaignView";
import CampaignPage from "pages/CampaignPage";
import StartCampaign from "pages/StartCampaign";
import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const SigninPage = lazy(() => import("./pages/SignInPage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/sign-in" element={<SigninPage></SigninPage>}></Route>
        <Route path="/" element={<LayoutDashboard></LayoutDashboard>}>
          <Route path="/" element={<DashboardPage></DashboardPage>}></Route>
          <Route
            path="/campaign"
            element={<CampaignPage></CampaignPage>}></Route>
          <Route
            path="/campaign/:slug"
            element={<CampaignView></CampaignView>}></Route>
          <Route
            path="/start-campaign"
            element={<StartCampaign></StartCampaign>}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;

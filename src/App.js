import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const SigninPage = lazy(() => import("./pages/SignInPage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<DashboardPage></DashboardPage>}></Route>
        <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/sign-in" element={<SigninPage></SigninPage>}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;

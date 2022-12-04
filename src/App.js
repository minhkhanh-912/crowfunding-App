import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const SigninPage = lazy(() => import("./pages/SignInPage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage"));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/sign-in" element={<SigninPage></SigninPage>}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;

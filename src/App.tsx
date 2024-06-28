import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home";
import RegisterForm from "./RegisterForm";
import { useState } from "react";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <>
      {!isAuth && <Navigate to="/sign-up" />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/sign-up"
          element={<RegisterForm setIsAuth={setIsAuth} />}
        />
      </Routes>
    </>
  );
};

export default App;

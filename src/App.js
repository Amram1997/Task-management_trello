import "./App.css";
import { Login } from "./pages/Login";
import { useLayoutEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Profile } from "./pages/profile";
import { Home } from "./pages/Home";
import ProtectedRoute from "./helpers/ProtectedRoute";
import getUserLocalStorage from "./helpers/getUserLocalStorage";
import { ContextProvider } from "./state/state";
import { SingleBoardPage } from "./pages/SingleProduct/SingleBoardPage";

function App() {
  const [user, setUser] = useState({
    name: "",
    password: "",
  });
  useLayoutEffect(() => {
    getUserLocalStorage();
  }, [getUserLocalStorage()]);

  return (
    <ContextProvider>
      <Routes>
        <Route
          path="/login"
          element={<Login user={user} setUser={setUser} />}
        />

        <Route
          path="/"
          element={<ProtectedRoute isAllowed={!!getUserLocalStorage()} />}
        >
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/board/:boardId" element={<SingleBoardPage />} />
        </Route>
      </Routes>
    </ContextProvider>
  );
}

export default App;

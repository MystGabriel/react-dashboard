import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import New from "./pages/new/New";
import NewCont from "./pages/new/NewCont";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Contracts from "./pages/contracts/Contracts";

function App() {

  const { currentUser } = useContext(AuthContext)

  const RequireAuth = ({children}) => {
    return currentUser ? (children) : <Navigate to="/login"/>
  }

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route index element={<RequireAuth><Home /></RequireAuth>} />
            <Route path="users">
              <Route index element={<RequireAuth><List /></RequireAuth>} />
              <Route
                path="new"
                element={<RequireAuth><New inputs={userInputs} title="Adicionar Novo Usuario" /></RequireAuth>}
              />
            </Route>
            <Route path="contracts">
              <Route index element={<RequireAuth><Contracts /></RequireAuth>} />
              <Route
                path="newcont"
                element={<RequireAuth><NewCont inputs={productInputs} title="Adicionar Novo Contrato" /></RequireAuth>}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

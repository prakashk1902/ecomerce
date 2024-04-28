import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Cart } from "./components";
import Signup from "./components/Signup";
import WithNavbar from "./components/WithNavbar";

function App() {
  return (
    <div className="flex flex-col text-neutral-950 min-h-full h-fit w-full">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <WithNavbar>
                <Home />
              </WithNavbar>
            }
          />
          <Route
            path="/cart"
            element={
              <WithNavbar>
                <Cart />
              </WithNavbar>
            }
          />
          <Route path="/auth/sign-in" element={<Signup />} />
          <Route path="/auth/sign-up" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
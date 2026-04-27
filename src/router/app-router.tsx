import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "../pages/home-page.tsx";
import LoginPage from "../pages/authentication/login-page.tsx";
import RegisterPage from "../pages/authentication/register-page.tsx";

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/">
                <Route index element={<HomePage /> }/>

                <Route path="auth">
                    <Route index element={<LoginPage />} />
                    <Route path="register" element={<RegisterPage />} />
                </Route>

            </Route>
        </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
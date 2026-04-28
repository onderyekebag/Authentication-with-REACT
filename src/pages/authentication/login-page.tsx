import {useFormik} from "formik";
import type {LoginInterface} from "../../interfaces/auth.interface.ts";
import {useDispatch} from "react-redux";
import {loginService} from "../../api/services/auth.service.tsx";
import {useLocation, useNavigate} from "react-router-dom";
import {getAccount} from "../../api/services/account.service.tsx";

const LoginPage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const initialValues: LoginInterface = {
    username: '',
    password: '',
    rememberMe: true
  }

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues,
    onSubmit: async (values) => {
      if (!values) {
        return;
      }

      await dispatch(loginService(values));
      await dispatch(getAccount());
      const redirectTo = location.state?.redirectTo || '/';
      navigate(redirectTo, { replace: true });
    }
  });

  return (
    <main className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-gray-800/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl space-y-6">

        <h2 className="text-3xl font-semibold text-center text-white">Login</h2>

        <div className="space-y-2">
          <label className="text-sm text-gray-400">Email</label>
          <input
              type="text"
              value={values.username}
              id="username"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm text-gray-400">Password</label>
          <input
              type="password"
              value={values.password}
              id="password"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
            type="submit"
            className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-white font-medium"
        >
          Login
        </button>

      </form>
    </main>
  );
};

export default LoginPage;
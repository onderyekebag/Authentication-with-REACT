import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../store/slices/auth-slice.tsx";

const Header = () => {
  const { isAuthenticated } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logout());
    navigate('/');
  }

  return (
    <header className="bg-gray-900 border-b border-gray-700 shadow-lg sticky top-0">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-bold">A</span>
          </div>
          <span className="text-white text-xl font-extrabold tracking-widest uppercase">
            Authentication
          </span>
        </div>

        <Link to="/profile" className="text-gray-400 text-sm font-semibold hover:text-white transition-colors duration-200">
          Profile
        </Link>

        <div className="flex items-center gap-3">
          {
            isAuthenticated ? <button onClick={onLogout} className="px-5 py-2 text-sm font-semibold text-indigo-400 border border-indigo-400 rounded-lg hover:bg-indigo-400 hover:text-white transition-all duration-200">
              Logout
            </button> : <><Link to="/auth" className="px-5 py-2 text-sm font-semibold text-indigo-400 border border-indigo-400 rounded-lg hover:bg-indigo-400 hover:text-white transition-all duration-200">
              Login
            </Link>
            <Link to="/auth/register" className="px-5 py-2 text-sm font-semibold text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 transition-all duration-200 shadow-md shadow-indigo-500/30">
            Register
            </Link></>
          }

        </div>

      </div>
    </header>
  );
};

export default Header;
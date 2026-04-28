import {useSelector} from "react-redux";
import {Navigate, useLocation} from "react-router-dom";

interface PrivateRouteProps {
    children: React.ReactNode;
}

const PrivateRoute = ({children}: PrivateRouteProps) => {
    const { isAuthenticated } = useSelector(state => state.auth);
    const location = useLocation();

    if (!isAuthenticated) {
        return <Navigate to="/auth" state={{ redirectTo: location.pathname }} replace />
    }

    return children;
};

export default PrivateRoute;
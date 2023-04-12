import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../../context/AuthContext"

const ProtectedRoute = ({ children }) => {
    const { currentUser, isAuthLoaded } = useContext(AuthContext);

    if (!isAuthLoaded) {
        return <p>Loading...</p>;
    }

    if (!currentUser) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;
import { Navigate } from "react-router";

const GuestRoute = ({ children }) => {
    const token = localStorage.getItem("token");

    if (token) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default GuestRoute;
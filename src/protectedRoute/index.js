import { Navigate, Outlet } from "react-router-dom";
// import LoginPage from '../account/login'

const useAuth = () => {
    const user = { loggedIn: localStorage.getItem("token") !== null ? true : false }
    return user && user.loggedIn
}
const ProtectedRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to='/login' />
}

export default ProtectedRoutes;
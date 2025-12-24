import {Navigate} from "react-router-dom";
import toast from "react-hot-toast";
const ProtectedRoute=({children}) =>{

    const token=localStorage.getItem("token");

    if(!token)
    {
        toast.error("please login first",{id:"login-error"});
        return <Navigate to="/login"></Navigate>
    }
    return children;
}
export default ProtectedRoute;
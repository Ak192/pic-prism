import React from 'react'
import {useSelector} from 'react-redux'
import {Navigate, useLocation} from 'react-router-dom'
const ProtectRoute = ({children,requiresAuth = true}) => {

    const isAuthenticated = useSelector((state)=>state.auth.isAuthenticated);
    const role = useSelector((state)=>state.auth.role);
    const location = useLocation();

    console.log({location});
    if(isAuthenticated && (location.pathname == "/login" || location.pathname == "/signup")){
        return <Navigate to={`/profile/${role}`} />;

    }
  if(!isAuthenticated && requiresAuth){
    return <Navigate to="/login" />;
  }
  return children;


};

export default ProtectRoute ;
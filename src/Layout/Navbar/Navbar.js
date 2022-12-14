import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../component/UserContext';

const Navbar = () => {

    const {user,logOut} = useContext(AuthContext);



    const handleLogout =()=> {
        logOut().then(result => console.log("logout"))
        .catch(error=> console.log(error));
    }


    return (
        <nav>
            <div className="navbar bg-purple-500">
                <Link to='/' className="btn btn-ghost normal-case text-xl">Home</Link>
                <Link to='/order' className="btn btn-ghost normal-case text-xl">Order</Link>
                
                
                
                {
                user? <button onClick={handleLogout} className="btn btn-ghost bg-red-400 normal-case text-xl">Sign OUT</button> 
                
                : 
                
                <div>
                <Link to= '/login' className="btn btn-ghost normal-case text-xl">Login</Link>
                <Link to='/register' className="btn btn-ghost normal-case text-xl">Register</Link>
                </div>
                }
            

                <p>{user?.email && user.email}</p>
            </div>
        </nav>
    );
};

export default Navbar;
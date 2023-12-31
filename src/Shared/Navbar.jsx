import { Link, NavLink } from "react-router-dom"
import logo from "../../public/logo.png"
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const menu = <>
        <li>  <NavLink className={({ isActive }) => isActive ? "active" : "default"} to={'/'}>Home</NavLink></li>
        <li>  <NavLink className={({ isActive }) => isActive ? "active" : "default"} to={'/colleges'}>Colleges</NavLink></li>
        <li>  <NavLink className={({ isActive }) => isActive ? "active" : "default"} to={'/admission'}>Admission</NavLink></li>
        {
            user &&
            <li>  <NavLink className={({ isActive }) => isActive ? "active" : "default"} to={'/my-college'}>My College</NavLink></li>
        }
    </>

    return (
        <div className="navbar MyContainer bg-base-100 text-white ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 gap-2 rounded-box w-52">
                        {menu}
                    </ul>
                </div>
                <a className="cursor-pointer normal-case text-xl flex gap-1 items-center  font-semibold"><img className="h-12" src={logo} alt="" /> College <span className=" text-[#f5864e]">Connect</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-2 px-1">
                    {menu}
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user ? <div className="dropdown dropdown-end z-20 ">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10  border border-[#f5864e] rounded-full">
                                <img src={user?.photoURL} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to={"/profile"}>{user?.displayName}</Link></li>
                            <li>
                                <Link to={"/profile"} className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li ><Link to={"/login"}
                                onClick={() => logOut()}
                            >Logout</Link></li>
                        </ul>
                    </div> :
                        <NavLink className={({ isActive }) => isActive ? "active  bg-[#2A323C] py-2 px-4   rounded-md " : "default hover:bg-[#2A323C] hover:text-gray-400 py-2 px-4 rounded-md"} to={'/login'}>Login</NavLink>
                }

            </div>
        </div>
    );
};

export default Navbar;
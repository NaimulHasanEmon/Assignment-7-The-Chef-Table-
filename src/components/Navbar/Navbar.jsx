import { CgProfile } from "react-icons/cg";
import { MdOutlineRestaurantMenu } from "react-icons/md";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <MdOutlineRestaurantMenu />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li>
                            <a>Recipes</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                            </li>
                            <li><a>About</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-lg md:text-xl lg:text-xl">Recipe Calories</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li>
                        <details>
                            <summary>Recipes</summary>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>
                    </ul>
                </div>

                {/* Search Bar */}
                <div className="navbar-end">
                    <div className="flex gap-1 md:gap-2 lg:gap-2">
                        <div className="form-control">
                        <input type="text" placeholder="Search" className="text-xs md:text-sm lg:text-sm input input-bordered h-7 w-[69px] md:h-8 md:w-auto lg:h-8 lg:w-24 rounded-3xl" />
                        </div>
                        <div>
                        <CgProfile className="h-7 w-7 md:h-8 md:w-8 lg:h-8 lg:w-8 text-purple-700"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
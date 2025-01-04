import { CgProfile } from "react-icons/cg";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
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
                    <a className="btn btn-ghost text-xl">Recipe Calories</a>
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
                    <div className="flex gap-2">
                        <div className="form-control">
                        <input type="text" placeholder="Search" className="text-sm input input-bordered h-8 w-24 rounded-3xl md:w-auto" />
                        </div>
                        <div>
                        <CgProfile style={{ height: '35px', width: '35px', color:'rebeccapurple'}} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
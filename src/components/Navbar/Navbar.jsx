import { CgProfile } from "react-icons/cg";
import { MdOutlineRestaurantMenu } from "react-icons/md";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 relative z-10">
                <div className="navbar-start">
                    <div className="dropdown dropdown-hover">
                        <div role="button" className="btn btn-ghost lg:hidden">
                            <MdOutlineRestaurantMenu />
                        </div>
                        <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[20] mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li>
                                <a>Recipes</a>
                                <ul className="p-2 bg-slate-300">
                                    <li><a>Grilled Chicken Salad</a></li>
                                    <li><a>Spaghetti Bolognese</a></li>
                                    <li><a>Vegetable Stir Fry</a></li>
                                    <li><a>Lemon Herb Fish</a></li>
                                    <li><a>Chocolate Cake</a></li>
                                    <li><a>Caesar Salad</a></li>
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
                        <li className="group relative">
                            <a>Recipes</a>
                            <ul className="absolute left-0 hidden group-hover:block z-20 md:mt-8 lg:mt-8 bg-slate-300 p-2 rounded-box shadow-lg md:w-48 lg:w-48">
                                <li><a>Grilled Chicken Salad</a></li>
                                <li><a>Spaghetti Bolognese</a></li>
                                <li><a>Vegetable Stir Fry</a></li>
                                <li><a>Lemon Herb Fish</a></li>
                                <li><a>Chocolate Cake</a></li>
                                <li><a>Caesar Salad</a></li>
                            </ul>
                        </li>
                        <li><a>About</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
                {/* Search Bar */}
                <div className="navbar-end">
                    <div className="flex gap-1 md:gap-2 lg:gap-2">
                        <div className="form-control">
                            <input
                                type="text"
                                placeholder="Search"
                                className="text-xs md:text-sm lg:text-sm input input-bordered h-7 w-[69px] md:h-8 md:w-auto lg:h-8 lg:w-24 rounded-3xl"
                            />
                        </div>
                        <div>
                            <CgProfile className="h-7 w-7 md:h-8 md:w-8 lg:h-8 lg:w-8 text-purple-700" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
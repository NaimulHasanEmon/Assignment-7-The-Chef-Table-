import Chef from '../../../public/assets/Images/Chef Photo.jpg';

const Banner = () => {
    return (
        <div
            className="relative rounded-3xl h-[70vh] sm:h-[80vh] md:h-screen mx-auto w-full bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${Chef})` }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-40 rounded-3xl"></div>

            {/* Contents */}
            <div className="relative text-center text-white px-6 sm:px-10 md:px-20 lg:px-32 xl:px-52">
                <p className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight">
                    Discover an exceptional cooking class tailored for you!
                </p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg mt-4 sm:mt-6">
                    Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database,
                    and solve 500+ coding problems to become an exceptionally well world-class Programmer.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-8 justify-center">
                    <button className="btn btn-success rounded-full text-sm sm:text-base md:text-lg font-semibold px-6 py-2 hover:bg-green-600">
                        Explore Now
                    </button>
                    <button className="btn btn-ghost border-white rounded-full text-sm sm:text-base md:text-lg font-semibold px-6 py-2 hover:bg-white hover:text-black">
                        Our Feedback
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
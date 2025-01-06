import PropTypes from "prop-types";

const CurrentlyCooking = ({currently}) => {
    const totalTime = currently.reduce((acc, item) => acc + parseInt(item.preparing_time), 0);
    const totalCalories = currently.reduce((acc, item) => acc + parseInt(item.calories), 0);

    return (
        <div>                       
            <p className="text-center text-2xl font-bold">Currently cooking: {currently.length}</p>
            <hr />
            <div className="overflow-hidden">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th className='p-1'>Name</th>
                            <th className='p-1'>Time</th>
                            <th className='p-1'>Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            currently.map((item, idx) => (
                                <tr key={idx}>
                                    <td className='p-1'>{idx + 1}</td>
                                    <td className='p-1'>{item.recipe_name}</td>
                                    <td className='p-1'>{item.preparing_time} minutes</td>
                                    <td className='p-1'>{item.calories} calories</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <hr />
            <div>
                <div className="">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th className="md:pl-10 lg:pl-10 text-slate-600">Total Time =<br />{totalTime} minutes</th>
                                <th className="text-slate-600">Total Calories =<br />{totalCalories} calories</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    );
};

CurrentlyCooking.propTypes = {
    currently: PropTypes.array.isRequired,
}

export default CurrentlyCooking;
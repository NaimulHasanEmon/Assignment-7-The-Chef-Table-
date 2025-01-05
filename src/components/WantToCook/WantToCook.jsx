import PropTypes from "prop-types";

const WantToCook = ({wtc, handlePreparing}) => {
    return (
        <div>
            <div>                        
                <p className="text-center text-2xl font-bold">Want to cook: {wtc.length}</p>
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
                                wtc.map((item, idx) => (
                                    <tr key={idx}>
                                        <td className='p-1'>{idx + 1}</td>
                                        <td className='p-1'>{item.recipe_name}</td>
                                        <td className='p-1'>{item.preparing_time} minutes</td>
                                        <td className='p-1'>{item.calories} calories</td>
                                        <button onClick={() => handlePreparing(item, item.recipe_id, item.preparing_time, item.calories)} className='btn bg-green-500'>Preparing</button>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

WantToCook.propTypes = {
    wtc: PropTypes.array.isRequired,
    handlePreparing: PropTypes.func.isRequired,
};

export default WantToCook;
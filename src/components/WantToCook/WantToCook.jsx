import PropTypes from "prop-types";
import { ToastContainer } from 'react-toastify';

const WantToCook = ({ wtc, handlePreparing }) => {
    return (
        <div>
            <div>                        
                <p className="text-center text-2xl font-bold mb-3">Want to cook: {wtc.length}</p>
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
                                    <tr key={idx} className="justify-center">
                                        <td className='p-1'>{idx + 1}</td>
                                        <td className='p-1'>{item.recipe_name}</td>
                                        <td className='p-1'>{item.preparing_time} minutes</td>
                                        <td className='p-1'>{item.calories} calories</td>

                                        {/* Preparing button */}
                                        <td>
                                            <button
                                                onClick={() => handlePreparing(item, item.recipe_id)} 
                                                className='bg-green-500 rounded-full h-7 w-20'>
                                                Preparing
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

WantToCook.propTypes = {
    wtc: PropTypes.array.isRequired,
    handlePreparing: PropTypes.func.isRequired,
};

export default WantToCook;
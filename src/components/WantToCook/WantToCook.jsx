import PropTypes from 'prop-types';

const WantToCook = ({wtc}) => {
    const {recipe_name, preparing_time, calories} = wtc
    return (
        <div>
            <div className="card border">
                <div className="card-body">
                    <div>                        
                        <p className="text-center text-2xl font-bold">Want to cook: {wtc.length}</p>
                        <hr />
                        <div className="overflow-x-auto">
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
                                                <td className='p-1'>{item.preparing_time}</td>
                                                <td className='p-1'>{item.calories}</td>
                                                <button className='btn bg-green-500'>Preparing</button>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

WantToCook.propTypes = {
    wtc: PropTypes.array.isRequired,
};

export default WantToCook;
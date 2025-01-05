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
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Time</th>
                                        <th>Calories</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        wtc.map((item, idx) => (
                                            <tr key={idx}>
                                                <td>{idx + 1}</td>
                                                <td>{item.recipe_name}</td>
                                                <td>{item.preparing_time}</td>
                                                <td>{item.calories}</td>
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
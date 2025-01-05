import PropTypes from 'prop-types';
import WantToCook from '../WantToCook/WantToCook';
import CurrentlyCooking from '../CurrentlyCooking/CurrentlyCooking';
import { useState } from 'react';

const SideBar = ({wtc}) => {
    const[currently, setCurrently] = useState([])

    const handlePreparing = (wtc, id) => {
        const newCurrent = [...currently, wtc]
        setCurrently(newCurrent)

        const newWTC = wtc.filter(item => item.recipe_id!== id)
        setCurrently(newWTC)
    }

    return (
        <div className="card border">
            <div className="card-body">
                <div>
                    <WantToCook
                        key={wtc.recipe_id}
                        wtc={wtc}
                        handlePreparing={handlePreparing}
                    ></WantToCook>
                </div>
                <div>
                    <CurrentlyCooking
                        key={currently.recipe_id}
                        currently={currently}
                    ></CurrentlyCooking>
                </div>
            </div>
        </div>
    );
};

SideBar.propTypes = {
    wtc: PropTypes.array.isRequired,
};

export default SideBar;
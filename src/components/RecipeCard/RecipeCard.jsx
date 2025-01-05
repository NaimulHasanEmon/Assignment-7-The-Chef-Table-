import PropTypes from "prop-types";
import { FiClock } from "react-icons/fi";
import { FaFire } from "react-icons/fa";

const RecipeCard = ({recipe, handleWantToCook}) => {
    const {recipe_name, recipe_image, short_description, ingredients, preparing_time, calories} = recipe
    return (
        <div>
            <div className="card card-compact bg-base-100 h-full w-full shadow-xl justify-center items-center">
                <figure>
                    <img
                    src={recipe_image}
                    alt={recipe_image}
                    className="h-52 w-full object-cover"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{recipe_name}</h2>
                    <p className="text-start">{short_description}</p>
                    <hr />
                    <div className="text-start">
                        <p className="text-xl font-semibold">Ingredients: {ingredients.length}</p>
                        <ul className="list-disc pl-5">
                            {
                                ingredients.map(ing => {
                                    return <li key={ing}>{ing}</li>;
                                })
                            }
                        </ul>
                    </div>
                    <hr />
                    <div className="flex justify-between">
                        <div className="flex gap-1 items-center">
                            <FiClock />
                            <p>
                                {preparing_time}
                            </p>
                        </div>
                        <div className="flex gap-1 items-center">
                            <FaFire />
                            <p>
                                {calories}
                            </p>
                        </div>
                    </div>
                    <div className="card-actions">
                        <button onClick={() => handleWantToCook(recipe)} className="btn bg-green-500 rounded-full hover:bg-green-600">Want to cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

RecipeCard.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleWantToCook: PropTypes.func.isRequired,
}

export default RecipeCard;
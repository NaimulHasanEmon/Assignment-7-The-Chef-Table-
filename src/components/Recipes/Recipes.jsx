import { useEffect, useState } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard'
import WantToCook from '../WantToCook/WantToCook';
import CurrentlyCooking from '../CurrentlyCooking/CurrentlyCooking';
import { toast } from 'react-toastify';

const Recipes = () => {
    const[recipe, setRecipe] = useState([])
    const[wtc, setWtc] = useState([])
    const[currently, setCurrently] = useState([])

    useEffect(() => {
        fetch('recipe.json')
        .then(res => res.json())
        .then(data => setRecipe(data))
    }, [])

    const handleWantToCook = recipe => {
        // Check if recipe already exists in the WantToCook list
        const exists = wtc.some(item => item.recipe_id === recipe.recipe_id);

        if (!exists) {
            const newWantToCook = [...wtc, recipe];
            setWtc(newWantToCook);
        } else {
            toast("This recipe is already in your Want to Cook list!", {className: "text-black bg-orange-200"});
        }
    }

    const handlePreparing = (recipe, id) => {
        const newCurrent = [...currently, recipe]
        setCurrently(newCurrent)

        const remainingWtc = wtc.filter(item => item.recipe_id !== id)
        setWtc(remainingWtc)
    }

    return (
        <div className="text-center content-center my-16">
            <p className="text-4xl font-bold">Our Recipes</p>
            <p className="text-xl font-medium mt-8">Explore our carefully curated selection of dishes, each crafted with the finest ingredients and authentic flavors. From healthy salads to indulgent desserts, our recipes are designed to delight every palate and make every meal memorable.</p>
            <div className="md:flex lg:flex mt-10 gap-5">
                {/* Recipe Card */}
                <div className="md:w-3/5 lg:w2/3 grid md:grid-cols-2 lg:grid-cols-2  gap-5 md:gap-5 lg:gap-6 text-start">
                {
                    recipe.map((recipe, idx) => (
                        <RecipeCard
                            key={idx}
                            recipe={recipe}
                            handleWantToCook={handleWantToCook}
                        ></RecipeCard>
                    ))
                }
                </div>

                {/* Sidebar */}
                <div className="mt-5 md:mt-0 md:w-2/5 lg:w-2/5 lg:mt-0 text-start">
                    <div className="card card-compact bg-base-100 w-full shadow-xl">
                        <div className="card-body">
                            <div className='card card-compact gap-5'>
                                <WantToCook
                                    wtc={wtc}
                                    handlePreparing={handlePreparing}
                                ></WantToCook>
                                <CurrentlyCooking
                                    currently={currently}
                                ></CurrentlyCooking>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipes;
import { useEffect, useState } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard'
import WantToCook from '../WantToCook/WantToCook';
import CurrentlyCooking from '../CurrentlyCooking/CurrentlyCooking';

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
        const newWantToCook = [...wtc, recipe]
        setWtc(newWantToCook)
    }

    const handlePreparing = (recipe, id) => {
        const newCurrent = [...currently, recipe]
        setCurrently(newCurrent)

        const remainingWtc = wtc.filter(item => item.recipe_id !== id)
        setWtc(remainingWtc)
    }

    return (
        <div className="text-center content-center mt-16">
            <p className="text-4xl font-bold">Our Recipes</p>
            <p className="text-xl font-medium mt-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi facilis, repellat obcaecati non quis voluptas nemo veritatis ipsam dolorum optio aspernatur quod doloremque incidunt, atque officiis nam suscipit dignissimos numquam.</p>
            <div className="flex mt-10 gap-5">
                {/* Recipe Card */}
                <div className="w-2/3 grid grid-cols-2 gap-10 text-start">
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
                <div className="w-1/3 text-start">
                    <div>
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
    );
};

export default Recipes;
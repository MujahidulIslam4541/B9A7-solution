/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import Recipe from "./recipe";


export default function Recepes({handleRecipeQueue}) {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('recipe.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])
    return (
        <div className="md:w-2/3 grid grid-cols-2 gap-4 mt-10">
            {
                recipes.map(recipe => <Recipe
                     key={recipe.id} 
                     recipe={recipe}
                     handleRecipeQueue={handleRecipeQueue} 
                     ></Recipe>)
            }
        </div>
    )
}

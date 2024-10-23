/* eslint-disable react/prop-types */


export default function Recipe({ recipe,handleRecipeQueue }) {
    const { recipeImage, recipeName, shortDescription, ingredients, preparingTime, calories } = recipe;
    return (
        <div className=" border bg-slate-100  rounded-md p-2 space-y-2 shadow-md">
            <img className="rounded-lg  w-full h-[250px]" src={recipeImage} alt="" />
            {/* <h2>{recipeId}</h2> */}
            <h2 className="text-2xl font-bold">{recipeName}</h2>
            <p className="text-xl">{shortDescription}</p>
            <h4 className="text-xl font-bold">ingredients:{ingredients.length}</h4>
            <ul className="list-disc ml-8 ">
                {ingredients.map((item, index) => <li key={index}>{item}</li>)}
            </ul>

            <div className="flex gap-6 text-xl">
            <p><i className="fa-regular fa-clock"></i> {preparingTime} min</p>
            <p><i className="fa-solid fa-fire-flame-curved"></i> {calories} Calories</p>
            </div>
            <button onClick={()=>handleRecipeQueue(recipe)} className="btn bg-green-400 rounded-full mt-2 px-6 text-xl">Want To Cook</button>

        </div>
    )
}

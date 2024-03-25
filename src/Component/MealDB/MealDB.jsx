import { useLoaderData } from "react-router-dom";
import DisplayMeal from "./DisplayMeal";


const MealDB = () => {
    const meal = useLoaderData();
    //console.log(meal.categories)

    return (
        <div className="mt-9">
            <h1>Meal number : <span className="text-xl font-bold">{meal.meals.length} </span></h1>

            <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 ">
                {
                    meal.meals.map(item=> <DisplayMeal key={item.idMeal}item={item}></DisplayMeal>)
                }
            </div>
        </div>
    );
};

export default MealDB;
import { useLoaderData, useNavigate } from "react-router-dom";


const DetailsMeal = () => {
    const Meal = useLoaderData()
    // console.log(Meal)
    const { strMeal, idMeal, strCategory, strArea, strTags, strMealThumb, strInstructions } = Meal.meals[0]
    const navigate = useNavigate()
    const handleMealBack = () => {
        navigate(-1)
    }

    return (
        <div className="space-y-4 mt-5 flex flex-col">
            <h1 className='text-xl font-bold'>Details About meal </h1>

            <div className="border-2 rounded-2xl text-center w-[50%] mx-auto p-5">
                <img className="rounded-xl  mx-auto" src={strMealThumb} alt="" />
                <h1 className="font-bold text-xl"> Id : {idMeal} </h1>
                <p className="font-bold text-xl">Name : {strMeal}</p>
                <p>Category :{strCategory}</p>
                <p>Tag : {strTags}</p>
                <p>Area : {strArea}</p>
                <p>Instructions : {strInstructions}</p>
                <button onClick={handleMealBack} className="btn btn-primary">Go Back</button>

            </div>

        </div>
    );
};

export default DetailsMeal;
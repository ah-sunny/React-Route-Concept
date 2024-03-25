import { useNavigate } from "react-router-dom";


const DisplayMeal = ({item}) => {
    const {idMeal,strMealThumb,strMeal} = item;

    const navigate = useNavigate();
    const handleDetails = ()=>{
        navigate(`/mealdb/${idMeal}`)
    }
    return (
        <div className="border-2 rounded-xl p-7 flex- flex-col space-y-2 ">
            <img className="rounded-xl h-52 w-full" src={strMealThumb}  />
            <p className="font-bold">Meal Id : {idMeal}</p>
            <p>Name : {strMeal}</p>
            
            <button onClick={handleDetails} className="btn btn-primary">Click to see Details</button>
  
        </div>
    );
};

export default DisplayMeal;
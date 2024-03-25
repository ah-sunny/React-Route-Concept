import { Link, useNavigate } from "react-router-dom";

const ShowUser = ({ person }) => {
    const nevigate = useNavigate()
    const handleDetails = () => {
        nevigate(`/user/${id}`)
    }

    const { id, name, email } = person
    return (
        <div className="border-2 border-rose-500 rounded-2xl p-2">
            <h1 className="text-xl font-bold">{name}</h1>
            <p>Email : {email}</p>
            {/* <p>Phone : {phone}</p> */}
            <Link to={`/user/${id}`}>
                <button className="border-2 p-1 rounded-md bg-amber-300 ">Show Details</button>
            </Link> <br />

            <button onClick={handleDetails} className="btn btn-secondary">Click to see details</button>

        </div>
    );
};

export default ShowUser;
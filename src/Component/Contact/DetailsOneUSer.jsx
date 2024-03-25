import { useLoaderData, useNavigate } from "react-router-dom";


const DetailsOneUSer = () => {
    const params = useLoaderData()
    const { username, email, phone, website, id, company, address } = params
    const navigate = useNavigate()
    const handleBack = () => {
        navigate(-1)
    }

    return (
        <div>
            <h1 className="my-9 underline text-2xl font-bold">Show details About User : </h1>
            <div className=" w-fit text-center mx-auto border-2 border-emerald-600 rounded-xl p-3">
                <h1 className="text-xl">Name : {params.name}</h1>
                <p>Id : {id}</p>
                <p>username :{username} </p>
                <p>Emai : {email}</p>
                <p>Phone Number : {phone} </p>
                <p>Website : {website} </p>
                <p>Company name : {company.name}</p>
                <p>Company Details : {company.catchPhrase}</p>
                <p>Address : <br />
                    <span>City : {address.city}</span><br />
                    <span>Street : {address.street} </span><br />
                    <span>Zipcode : {address.zipcode}</span>
                </p>
                <button onClick={handleBack} className="btn btn-info">Go Back</button>

            </div>
        </div>
    );
};

export default DetailsOneUSer;
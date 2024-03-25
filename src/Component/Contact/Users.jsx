import { useLoaderData } from "react-router-dom";
import ShowUser from "./ShowUser";


const Contact = () => {
    const user = useLoaderData()

    return (
        <div>
            <h1>User list <span className="text-xl font-bold">{user.length} </span>  </h1>
            <p>please contact us for any information</p>

            <div className="grid grid-cols-1 w-3/4 text-center mx-auto lg:grid-cols-3 gap-7">
                {
                    user.map(person => <ShowUser key={person.id} 
                        person={person}
                    >

                    </ShowUser>)
                }
            </div>

        </div>
    );
};

export default Contact;
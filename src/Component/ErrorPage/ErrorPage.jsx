import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {

    const error = useRouteError();
    return (
        <div className=" h-screen bg-rose-400 mx-auto  flex flex-col justify-center text-center gap-7">
            <h1 className="text-7xl font-bold">Oops!!!</h1>
            <h1>{error.statusText || error.message}</h1>
            <div>
                {
                    error.status === 404 &&
                    <div>
                            <h1 className="text-5xl font-bold">404 Error</h1>
                            <p>Page Not Found</p>
                            <p>Go Back to HomePage</p>
                            <Link to='/'> <button className="btn btn-warning text-bold mt-4">HomePage</button></Link>
                    </div>
                }

            </div>
        </div>
    );
};

export default ErrorPage;
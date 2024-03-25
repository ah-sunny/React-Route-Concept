import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";


const Main = () => {
const navigation = useNavigation();



    return (
        <div className="container mx-auto text-center ">
            <h1 className="text-4xl font-bold mb-9">Handeling react route</h1>
            <Header></Header>
            {
                navigation.state === 'loading' ?
                <span className="loading loading-bars loading-lg text-primary"> </span>
                : 
                <Outlet></Outlet>
            }
           
            {/* <Footer></Footer> */}

            
        </div>
    );
};

export default Main;
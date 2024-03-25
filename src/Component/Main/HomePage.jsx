import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


const Main = () => {
    const navigation = useNavigation();



    return (
        <div >
            <div className="container mx-auto text-center min-h-[318px]">
                <h1 className="text-4xl font-bold mb-9">Handeling react route</h1>
                <Header></Header>
                {
                    navigation.state === 'loading' ?
                        <span className="loading loading-bars loading-lg text-primary"> </span>
                        :
                        <Outlet></Outlet>
                }
            </div>

            <div className="mt-5 w-full">

                <Footer></Footer>
            </div>


        </div>
    );
};

export default Main;
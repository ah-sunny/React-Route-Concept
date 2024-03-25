import { NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <nav className="flex justify-center gap-10 font-bold text-xl ">
            <NavLink to='/home'>Home  </NavLink>
            <NavLink to='/about'>About  </NavLink>
            <NavLink to='/user' >User List  </NavLink>
            <NavLink to='/mealdb'>MealDB</NavLink>
           
        </nav>
    );
};

export default Header;
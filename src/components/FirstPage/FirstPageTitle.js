import {GoHeart} from "react-icons/go"; 
import './FirstPageTitle.css';
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth";
import { useHistory } from "react-router-dom";


const FirstPageTitle = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const logoutHandler = () => {
       dispatch(authActions.logout());
       history.push('/');
    };

    return (
        <div className='firstpage'>
            <h1><GoHeart/> Health Checks status</h1>
            <button className='button'onClick={logoutHandler}>Logout</button>
        </div>
    );
};

export default FirstPageTitle;
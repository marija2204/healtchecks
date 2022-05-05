import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth";
import {GoHeart} from "react-icons/go";
import './Header.css';
import TimeOfChange from "./TimeOfChange";
import { useHistory } from "react-router-dom";


const Header = (props) => {
    const dispatch = useDispatch();
    const back = useHistory();

    const isBackHandler = () => {
        back.push('/');
    };
    
    const logoutHandler = () => {
        back.push('/');
       dispatch(authActions.logout());
    };
    
    return (
    <Fragment>
        <header className="header">
            <h1><GoHeart/> Health Checks status</h1>
            <div><TimeOfChange timeOut={props.timeOut} setTimeout={props.setTimeout}/>
            <button className="button" onClick={isBackHandler}>Back</button>
            <button className='button' onClick={logoutHandler}>Logout</button>
            </div>
        </header>
    </Fragment>
    );
};


export default Header;
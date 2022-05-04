import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectActions } from "../../store/select";
import {GoHeart} from "react-icons/go";
import './Header.css';
import TimeOfChange from "./TimeOfChange";
import { useHistory } from "react-router-dom";


const Header = (props) => {
    const back = useHistory();

    const isBackHandler = () => {
        back.push('/');
    };
    
    return (
    <Fragment>
        <header className="header">
            <h1><GoHeart/> Health Checks status</h1>
            <div><TimeOfChange timeOut={props.timeOut} setTimeout={props.setTimeout}/>
            <button onClick={isBackHandler}>Back</button></div>
        </header>
    </Fragment>
    );
};


export default Header;
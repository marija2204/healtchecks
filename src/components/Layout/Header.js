import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectActions } from "../../store/select";
import {GoHeart} from "react-icons/go";
import './Header.css';
import TimeOfChange from "./TimeOfChange";


const Header = (props) => {

    const Select = useSelector( state => state.select.isSelected);
    const dispatch = useDispatch();

    const isBackHandler = () => {
        dispatch(selectActions.toBeBack());
    };
    
    return (
    <Fragment>
        <header className="header">
            <h1><GoHeart/> Health Checks status</h1>
            {Select && <div><TimeOfChange timeOut={props.timeOut} setTimeout={props.setTimeout}/>
            <button onClick={isBackHandler}>Back</button></div>}
        </header>
    </Fragment>
    );
};


export default Header;
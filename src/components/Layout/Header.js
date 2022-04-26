import { Fragment, useRef} from "react";
import {GoHeart} from "react-icons/go";
import HealthChecksMenu from './HealthChecksMenu'
import './Header.css';
import TimeOfChange from "./TimeOfChange";

const Header = (props) => {
    

    return <Fragment>
        <header className="header">
            <h1><GoHeart/> Health Checks status</h1>
            <TimeOfChange timeOut={props.timeOut} setTimeout={props.setTimeout}/>
        </header>
        <HealthChecksMenu/>
    </Fragment>
};


export default Header;
import { Fragment } from "react";
import {GoHeart} from "react-icons/go";
import HealthChecksMenu from './HealthChecksMenu'

const Header = (props) => {
    return <Fragment>
        <header>
            <h1><GoHeart/> Healt Checks status</h1>
        </header>
        <HealthChecksMenu></HealthChecksMenu>
    </Fragment>
};

export default Header;
import HealthChecksIcon from './HealthChecksIcon';
import './HealthChecksItem.css';
import PropTypes from 'prop-types';

const HealthChecksItem = (props) => {

    const datas = Object.entries(props.data);
    let content = datas.map( data => {
        return data
    })
    
    return (
        <li className="checks">
            <div >{props.name}</div>
            <div className="status"><HealthChecksIcon status={props.status}/>{props.status}</div>
            <div>{props.description}</div>
            <div>{content}</div>
        </li>
    );
};

HealthChecksItem.propTypes = {
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired
 };


export default HealthChecksItem;
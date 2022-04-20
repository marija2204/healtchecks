import HealthChecksIcon from './HealthChecksIcon';
import './HealthChecksItem.css';
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


export default HealthChecksItem;
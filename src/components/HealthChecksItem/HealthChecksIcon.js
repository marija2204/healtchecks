import React from "react";
import { GoVerified } from "react-icons/go";
import { RiErrorWarningFill} from "react-icons/ri";
import './HealthChecksIcon.css';


const HealthChecksIcon = (props) => {
     
    if(props.status === 'Healthy'){
        return <span className="healthy"><GoVerified/></span>
    }else if (props.status === 'Degraded'){
        return <span className="degraded"><RiErrorWarningFill/></span>
    }else{
        return <span className="unhealthy"><RiErrorWarningFill/></span>
    }
};


export default HealthChecksIcon;
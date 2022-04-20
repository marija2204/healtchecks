
import {useState} from "react";
import './HealthChecksOverall.css'
import HealthChecksIcon from "../HealthChecksItem/HealthChecksIcon";

const HealthChecksOverall = () => {
  const [status, setStatus]= useState();
  const [duration, setDuration] = useState();
  
fetch('https://services.testnisite.com:8103/background/sport/health/ready').then(response => {
  return response.json();
}).then((data) => {
  setStatus(data.OverallStatus);
  setDuration(data.TotalChecksDuration)
});

  return(
           <div className="example">
              <div>Overall Status</div>
              <div><HealthChecksIcon status={status}/>{status}</div>
              <div>{duration}</div>
          </div>
       
  );
};

export default HealthChecksOverall;
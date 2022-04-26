
import {useState,useEffect} from "react";
import './HealthChecksOverall.css'
import HealthChecksIcon from "../HealthChecksItem/HealthChecksIcon";

const HealthChecksOverall = (props) => {
  const [status, setStatus]= useState();
  const [duration, setDuration] = useState();
  const [httpError, setHttpError] = useState();
  const [isLoading, setIsLoading] = useState(true);

 useEffect(() => {
  const interval = setInterval(() => {
    console.log('This will run every 2 seconds!');
    fetch('https://services.testnisite.com:8103/background/sport/health/ready').then(response => {  
      if(!response.ok){
        
        if(response.status ==! 503){
          throw new Error(response.statusText);
        }
      }
      return response.json();

    }).then((data) => {

      setStatus(data.OverallStatus);
      setDuration(data.TotalChecksDuration);
      setIsLoading(false);

    }).catch((error) => {
           setHttpError(error.message);
           setIsLoading(false);
     });

  }, Number(props.timeOut)* 1000);
  return () => clearInterval(interval);
}, [props.timeOut]);
  
 
 if(isLoading) {
  return <section className='DatasLoading'>
    <p>Loading...</p>
  </section>
  };


  return(<div className="error">
           {httpError ? httpError : (
                      <div className="example">
                        <div>Overall Status</div>
                        <div><HealthChecksIcon status={status}/>{status}</div>
                        <div>{duration}</div>
                      </div>
       )}</div>
  );
  };

export default HealthChecksOverall;
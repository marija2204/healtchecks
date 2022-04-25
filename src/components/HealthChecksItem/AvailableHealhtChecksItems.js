import React, { useEffect, useState } from "react";
import HealthChecksItem from "./HealthChecksItem";
import './AvailableHealthChecks.css'


const AvailableHealthChecksItems = () => {
   
    const [items, setItems] = useState([]);
    const [HttpError, setHttpError] = useState();
    const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {

   fetch('https://services.testnisite.com:8103/background/sport/health/ready').then(response => {
      if(!response.ok){
        
         if(response.status ==! 503){
            throw new Error(response.statusText);
          }
      }
      return response.json()

   }).then(data =>{
       let keys = Object.keys(data.DependencyHealthChecks);
       let values = Object.values(data.DependencyHealthChecks);
       for(let i=0; i<values.length; i++) {

          values[i].name = keys[i]
       }
     
       setItems(values);
       setIsLoading(false);
     
      }).catch((error) => {
           setHttpError(error.message);
           setIsLoading(false);
      });
    },[])

    if(isLoading) {
      return <section className='DatasLoading'>
        <p>Loading...</p>
      </section>
    }

    const list = items.length > 0 ? items.map((item) => {
        
      return ( <HealthChecksItem
         key={item.name}
         name={item.name}
         status={item.Status}
         description={item.Description}
         data={item.Data}
        />)

        }) : null;
    return (
     <section>
         <div className="error">
         {HttpError ? HttpError : list && list.length > 0 && 
        <ul className="items-list">{list}</ul>
         }
        </div>
     </section>

    );
};

export default AvailableHealthChecksItems;
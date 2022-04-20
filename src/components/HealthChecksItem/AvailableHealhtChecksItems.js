import React, { useEffect, useState } from "react";
import HealthChecksItem from "./HealthChecksItem";
import './AvailableHealthChecks.css'


const AvailableHealthChecksItems = () => {
   
    const [items, setItems] = useState([]);

   useEffect(() => {

   fetch('https://services.testnisite.com:8103/background/sport/health/ready').then(response => {
      return response.json()
   }).then(data =>{
       let keys = Object.keys(data.DependencyHealthChecks);
       let values = Object.values(data.DependencyHealthChecks);
       for(let i=0; i<values.length; i++) {

          values[i].name = keys[i]
       }
     
       setItems(values);

      });
    },[])

    const list = items.length > 0 ? items.map((item) => {
        
      return ( <HealthChecksItem
         name={item.name}
         status={item.Status}
         description={item.Description}
         data={item.Data}
        />)

        }) : null;

      console.log(list);
    return (
     <section>
         <div>
         {list && list.length > 0 && 
        <ul className="items-list">{list}</ul>
         }
        </div>
     </section>

    );
};

export default AvailableHealthChecksItems;
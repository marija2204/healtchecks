import React from "react";
import './FirstPage.css';
import { Link } from "react-router-dom";
import FirstPageTitle from "./FirstPageTitle";

const FirstPage = () => {
  // const Select = useSelector( state => state.select.isSelected)
  // const dispatch = useDispatch();
  
  // const isSelectedHandler = () => {
  //     dispatch(selectActions.isSelected());
  //     console.log('test1',Select);
  // };
    return (
      <div>
       <FirstPageTitle/>
        <main className='products'>
          <h1>My Products</h1>
          <div>
             <Link  className='btn' to="/test1" >TEST 1</Link>
             <Link  className='btn' to="/test2" >TEST 2</Link>
             <Link  className='btn' to="/test3" >TEST 3</Link>
          </div>
        </main>
        </div>
      );
};

export default FirstPage;
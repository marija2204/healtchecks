import React from "react";
import classes from './FirstPage.module.css';
import { useDispatch, useSelector } from "react-redux";
import { selectActions } from '../../store/select';
import { Link } from "react-router-dom";
import Header from "../Layout/Header";
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
        <main className={classes.products}>
          <h1>My Products</h1>
          <div>
             <button><Link to="/test1" className={classes.link}>TEST 1</Link></button>
             <button> <Link to="/test2" className={classes.link}>TEST 2</Link></button>
             <button><Link to="/test3" className={classes.link}>TEST 3</Link></button>
          </div>
        </main>
        </div>
      );
};

export default FirstPage;
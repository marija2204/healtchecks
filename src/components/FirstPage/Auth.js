 import './Auth.css';
 import {GoHeart} from "react-icons/go"; 
 import { useDispatch } from 'react-redux';
 import { authActions } from '../../store/auth';
import { useHistory } from 'react-router-dom';
import { useEffect,useRef } from 'react';
import { useSelector } from 'react-redux';

 const Auth = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const isAuth = useSelector(state => state.auth.isAuthenticated );
    const isAdmin = useSelector(state => state.auth.isAdmin);
    const nameInputRef = useRef();
    const passInputRef = useRef();

    useEffect(() => {
      if(isAuth) history.push("/firstpage");
      else if(isAdmin) history.push("/firstpage");
    },[])

    const loginHandler = (event) => {
      event.preventDefault();
      const userName = nameInputRef.current.value;
      const password = passInputRef.current.value;

      const validAdminEmail = new RegExp('admin@admin.com' );
      const validAdminPassword = new RegExp('admin');
      const validUserEmail = new RegExp('user@user.com' );
      const validUserPassword = new RegExp('user');

      
      if(validAdminEmail.test(userName) && validAdminPassword.test(password)){
        history.push("/firstpage");
        dispatch(authActions.isAdminLogin());

      }else if (validUserEmail.test(userName) && validUserPassword.test(password)){
        history.push("/firstpage");
        dispatch(authActions.login());
      }

      nameInputRef.current.value = '';
      passInputRef.current.value = '';
    };

    return (
        <main className='auth'>
          <div><h1><GoHeart/> Health Checks status</h1></div>
          <section>
            <form onSubmit={loginHandler}>
              <div className='control'>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' ref={nameInputRef}/>
              </div>
              <div className='control'>
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' ref={passInputRef}/>
              </div>
              <button className='btn'>Login</button>
            </form>
          </section>
        </main>
      );
    };


 export  default Auth;
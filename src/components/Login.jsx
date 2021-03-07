import React, { useState, useContext } from 'react';
import { fetchLogin } from '../services/services';
import messages from '../services/messages';
import spinner from '../services/spinner.svg';

//This function is to provide login interface
const Login = ({onLogIn}) => {
 // This state is all local to the component
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const performLogin = () => {
    if(!username) {
      setError(messages.USERNAME_REQUIRED);
      return;
    }

   //validate user's name
    if(username==='dog'){
      setError(messages.BAD_USERNAME)
      return;
    }
    setError('');
    setIsLoading(true);
    fetchLogin(username)
    .then( (userInfo) => {
      console.log(userInfo)
      onLogIn(userInfo.username)
      setIsLoading(false); 
    })
    .catch( (err) => {
      setError(messages[err.code || 'DEFAULT']);
      setIsLoading(false);
    });
  };

  return (
    <div className="login">
      <input className="username" onChange={ (e) => setUsername(e.target.value)  } placeholder="Enter your username"/>
      <p className="error">{error}</p>
      { isLoading ?
          <img alt="spinner" src={spinner}/> :
          <button className = "loginbtn" onClick={ performLogin }>Login</button>
      }
    </div>
  );

};

export default Login;

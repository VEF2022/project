import React from 'react'
import './auth-page.css';

import AuthForm from './AuthForm/AuthForm';

const AuthPage: React.FC = () => {
  return (
    <div className='auth-page'>
     
      <AuthForm></AuthForm>
      
    </div>
  );
};

export default AuthPage;

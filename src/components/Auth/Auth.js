import React from 'react';

const Auth = () => {
  return (
    <div className="section container" style={{ textAlign: 'center' }}>
      <h1>Sign-up</h1>
      <p>To add books to your personal you need to create an account</p>
      <div id="firebaseui-auth-container" style={{ marginTop: '40px' }}></div>
    </div>
  );
};

export default Auth;

import React, { useState, useEffect } from 'react';
import iframe from './components/iframe';

import './App.css';

const App = () => {
  const [jwt, setJwt] = useState(null)

  useEffect(() => {
    const jwt = localStorage.getItem('jwt')
    setJwt(jwt)
  }, [jwt])

  return (
    <div>
      {jwt ? <h1>You are logged in</h1> : <h1>You are not logged in</h1>}
    </div>
  );
}

export default App;

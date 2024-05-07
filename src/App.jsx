import Authenticate from "./components/Authenticate";
import SignUpForm from "./components/SignUpForm";
import React, { useState } from 'react';

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <SignUpForm setToken={setToken} />
      <Authenticate token={token} />
    </>
  );
}

export default App;
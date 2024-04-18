import { useState } from 'react'

import './App.css'

import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

function App() {
  const [user, setUser] = useState(undefined);

  const onAuth = (userVar)=>{
    setUser(userVar);
  }
  console.log("user" , user)

  if (!user) {
    return <AuthPage onAuth={onAuth} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default App

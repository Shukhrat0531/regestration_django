import React from "react";
import {Route,Routes} from "react-router-dom";
import SignUp from "./components/Register";



function App() {
  return (
    <Routes>
      <Route path="/"   element={<SignUp/>}/>
      
    </Routes>
    
  );
}

export default App;

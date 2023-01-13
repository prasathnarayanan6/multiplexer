// import logo from './logo.svg';
import { useState } from 'react'
import './App.css';

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function registerUser(event){
    event.preventDefault()
    const response = fetch('http://localhost:1337/api/users/register', {
      method: 'POST',
      header: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
    const data = await response.json()
    console.log(data)
  }

  return <center><div>
    <h1>Register</h1>
    <form onSubmit={registerUser}>
        <input value={name}
         onChange={(e) => setName(e.target.value)} 
         type="text"
         placeholder="Name"/><br></br>
         <input value={email}
         onChange={(e) => setEmail(e.target.value)} 
         type="email"
         placeholder="Email"/><br></br>
         <input value={password}
         onChange={(e) => setPassword(e.target.value)} 
         type="password"
         placeholder="Name"/><br></br>
         <input type="submit" value="Register" />
         
    </form>
  </div></center>
}

export default App;

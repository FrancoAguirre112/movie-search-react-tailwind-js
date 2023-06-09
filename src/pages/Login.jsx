import { useState } from 'react';
import heroImage from '../assets/heroImagePopcorn.png';
import { useAuthContext } from '../contexts/authContext';

function Login() {
  const { login } = useAuthContext();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

const handleUserInputChange = (event) => {
  setUser(event.target.value);
}

const handlePasswordInputChange = (event) => {
  setPassword(event.target.value);
}

  const handleSubmit = () => {
    event.preventDefault();
    if(user === "admin" && password === "admin") {
      login();
    }
    else {
      alert("Incorrect user and/or password")
    }
  }

  return ( 
    <div className='space-y-8'>
      <img src={heroImage} alt="an image of popcorn" className='max-w-[60%] mx-auto'/>
      <form className="flex flex-col space-y-5" onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" className="border-2 rounded-lg p-2 bg-gray-600 focus:outline-none focus:border-gray-700" value={user} onChange={handleUserInputChange}/>
        <input type="password" placeholder="Password" className="border-2 rounded-lg p-2 bg-gray-600 focus:outline-none focus:border-gray-700" value={password} onChange={handlePasswordInputChange}/>
        <p>Use username: admin password: admin</p>
        <button type="submit" className="p-3 px-6 pt-2 font-bold text-white text-center border-2 rounded-full align-baseline hover:bg-white hover:text-black transition-all md:block" >Login</button>
      </form>
    </div>
  )
}

export default Login

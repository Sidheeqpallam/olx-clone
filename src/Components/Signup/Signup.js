import React, { useState, useContext } from 'react';

import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/Context';
import './Signup.css';
import { useHistory } from 'react-router-dom';

export default function Signup() {
  const history = useHistory()
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const {firebase} = useContext(FirebaseContext)
  const handleSubmit = (e)=>{
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(email, password).then((result)=>{
      result.user.updateProfile({displayName : username}).then(()=>{
        firebase.firestore().collection('users').add({
          id: result.user.uid,
          username : username,
          phone : phone
        }).then(()=>{
          console.log(result)
          history.push('login')
        })
        
      })
      
    })
  }
  
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            name="email"
            defaultValue="sample@gmail.com"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="nuber"
            name="phone"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            defaultValue='1234567890'
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}

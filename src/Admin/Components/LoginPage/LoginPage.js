import axios from 'axios';
import React, { useEffect, useState, } from 'react'
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'
export const LoginPage = () => {
  const [errMsg, setErrMsg] = useState('')
  const [user_name, setUser_name] = useState('');

  const [items, setItems] = useState([]);
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (localStorage.getItem('item', JSON.stringify(items))) {
  //   }
  // },
  //   [])
  const submit = async e => {
    e.preventDefault();
    const data = await axios.post('login', {
      user_name, password
    }, { withCredentials: true });
    axios.defaults.headers.common['Authorization'] = `Bearer ${data['token']}`;
    navigate(true);
    console.log(data);
    if (data.status === 200) {
      navigate('/device')
    } else {
      setErrMsg('invalid User name and/or password')
    }
    localStorage.setItem('item', JSON.stringify(data))
    localStorage.setItem('token', JSON.stringify(data.data.obj))
  }
  return (
    <div className='LoginPage'>
      <div className='login-bg'>
        <div className='login-form'>
          <h1>Welcome to program</h1>
          <form onSubmit={submit} >
            <div className='form-us forms'>
              <label className='label-us label'>Username</label>
              <input className='input-us inputs' type='text' name='username' value={user_name} onChange={(e) => setUser_name(e.target.value)} />
            </div>
            <div className='form-pass forms'>
              <label className='label-pass label'>Password</label>
              <input className='input-pass inputs' type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            {errMsg && <p>{errMsg}</p>}
            <div className='form-chec'>
              <input className='input-chec' type="checkbox" />
              <label className='label-chec'>Remember me</label>
            </div>
            <div className='form-btn'>
              <button className='login-btn' >LOGIN</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
  // useEffect(() => {
  //   if (localStorage.getItem('item', JSON.stringify(items))) {
  //   }
  // },
  //   [])
  // async function handleSubmit() {
  //   console.warn(user_name, password)
  //   let items = { user_name, password };
  //   let response = await fetch('http://185.183.182.157:5001/api/login', {
  //     method: 'POST',
  //     headers: {
  //       Authorization: "Bearer " + localStorage.getItem("access_token"),
  //       "Content-Type": "application/json",
  //       "Accept": "application/json"
  //     },
  //     body: JSON.stringify(items)
  //   })
  //   let result = await response.json()
  //   console.log(result, 'result');
  //   console.log(response, 'response');
  //   if (response.status === 200) {
  //     navigate('/device')
  //   } else {
  //     setErrMsg('invalid User name and/or password')
  //   }
  //   localStorage.setItem('item', JSON.stringify(result))
  //   localStorage.setItem('token', JSON.stringify(result.obj))
  // }
}



import React, { useState } from 'react'

import './App.css';


function App() {
  const [userdetails, setUserdetails] = useState({
    username: "",
    lastname: '',
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
    mobile: '',
  });

  const [focused, setfocused] = useState({
    username: false,
    lastname: false,
    mobile: false,
    email: false,
    birthday: false,
    password: false,
    confirmPassword: false,
  });

  const handleBlur = (e) => {
    setfocused({...focused, [e.target.name]: true})
  }
  
  const onHandleChannge = e => {
    setUserdetails({ ...userdetails, [e.target.name]: e.target.value })
  }

  const handleSubmitForm = (e) => {
    e.preventDefault()
    setUserdetails({
      username: '',
      lastname: '',
      mobile: '',
      email: '',
      birthday: '',
      password: '',
      confirmPassword: '',
    })

  }

  return (
    <div className="App">

      <form className="from-container" onSubmit={handleSubmitForm}>
        <h1>Register</h1>
        <label htmlFor="1">Username</label>
        <input id='1'
          name="username"
          type="text"
          value={userdetails.username}
          placeholder="Username"
          pattern="^[A-Za-z0-9]{3,16}$"
          required={true}
          onChange={onHandleChannge}
          onBlur={handleBlur}
          focused={focused.username.toString()}
        />
        <span>Username should be 3-16 characters and shouldn't include any special character!</span>
        <label htmlFor="lastname">Lastname</label>
        <input id='lastname'
          type="text"
          placeholder="Enter lastname"
          name="lastname"
          onChange={onHandleChannge}
          value={userdetails.lastname}
          required={true}
          pattern='^[a-zA-Z]*$'
          onBlur={handleBlur}
          focused={focused.lastname.toString()} />
        <span>Lastname should be 3-16 charcters and shouldn't include any special charcters</span>
        <label htmlFor="mobile">Mobile No</label>
        <input id='mobile'
          type="mobile"
          placeholder="Enter Mobile No"
          name="mobile"
          onChange={onHandleChannge}
          value={userdetails.mobile}
          required={true}
          pattern="(0|91)?[6-9][0-9]{9}"
          onBlur={handleBlur}
          focused={focused.mobile.toString()} />
        <span>It should valid mobile Number</span>
        <label htmlFor="2">Email</label>
        <input id='2'
          name="email"
          type="email"
          value={userdetails.email}
          placeholder="Email"
          required={true}
          onChange={onHandleChannge}
          onBlur={handleBlur}
          focused={focused.email.toString()}
        />
        <span>It should be a valid email address!</span>
        <label htmlFor="3">Birthday</label>
        <input id='3'
          name="birthday"
          type="date"
          value={userdetails.birthday}
          onChange={onHandleChannge}
          onBlur={handleBlur}
          focused={focused.birthday.toString()}
        />
        <span>please give Dob</span>
        <label htmlFor="4">Password</label>
        <input id='4'
          name="password"
          type="password"
          value={userdetails.password}
          placeholder="Password"
          pattern='^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$'
          required={true}
          onChange={onHandleChannge}
          onBlur={handleBlur}
          focused={focused.password.toString()}
        />
        <span>Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!</span>
        <label htmlFor="5">ConfirmPassword</label>
        <input id='5'
          name="confirmPassword"
          type="password"
          value={userdetails.confirmPassword}
          placeholder="Confirm Password"
          pattern={userdetails.password}
          required={true}
          onChange={onHandleChannge}
          onBlur={handleBlur}
          onFocus={() => setfocused(true)}
          focused={focused.confirmPassword.toString()}
        />
        <span>Passwords don't match!</span>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

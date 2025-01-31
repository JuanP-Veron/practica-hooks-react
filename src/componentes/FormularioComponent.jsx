{/*import { useState } from "react";*/}
import { useEffect, useRef } from "react";
import { useForm } from "../hooks/useForm";


export const FormularioComponent = () => {

  const focusRef = useRef()
  console.log(focusRef)

  const inicialForm = {
    userName: '',
    email: '',
    password: ''
  }
    
  const { formState, userName, email, password, onInputchange } = useForm(inicialForm)
  

    const onSubmit = (event) => {
      event.preventDefault()
      console.log(formState)
    }

    useEffect(() => {
      focusRef.current.focus()
    }, [])
    

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="userName">User Name</label>
        <input
          ref={focusRef}
          type="text"
          className="form-control"
          name="userName"
          placeholder="Enter your Username"
          value={userName}
          onChange={onInputchange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          name="email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          value={email}
          onChange={onInputchange}
        />
        
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="Password"
          value={password}
          onChange={onInputchange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

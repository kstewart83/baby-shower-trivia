'use client'

import React, { useState } from 'react';
import { useActionState } from 'react';
import { registerUser } from '@/app/actions/registerUser';

const SigninForm = () => {
  const [state, action] = useActionState(registerUser, {
    message: ""
  })
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  return <form action={action}>
    <label htmlFor="first-name">First Name</label>
    <input id="first-name" type="text" name="firstName" onChange={(e) => setFirstName(e.target.value)}/>
    <label htmlFor="last-name">Last Name</label>
    <input id="last-name" type="text" name="lastName" onChange={(e) => setLastName(e.target.value)}/>      
    <input type="submit" value="Submit"/>
  </form>
};

export default SigninForm;

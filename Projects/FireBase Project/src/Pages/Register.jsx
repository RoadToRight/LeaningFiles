import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFirebase } from '../Context/Firebase';
import { useNavigate } from 'react-router-dom';



const Register = () => {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("")
    const Navigate = useNavigate()
    const Firebase = useFirebase();
    useEffect(() => {

        if(Firebase.LoggedIn){
            Navigate("/")
        }

    }, [Firebase,Navigate])
    const handleSubmit = async (e) =>{

        e.preventDefault()
        console.log("Sign up in...")
      await Firebase.signUpUserWithEmailAndPassword(email,password)
      console.log("Sign up")
    }
    const handleWithGoogle = async () => {
        console.log("Sign Up in...")
       await Firebase.GoogleSignin()
       console.log("Signed Up...")

    }
    console.log(Firebase.User)
  return (
    <div>
        <Form className='mt-5 mx-5' onSubmit={(e) => handleSubmit(e)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={email} onChange={(e) => setemail(e.target.value)} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control value={password} onChange={(e) => setpassword(e.target.value)} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Create Account
      </Button>
    <br /><br />
      <Button onClick={handleWithGoogle} variant="danger" type="submit">
        Sign Up With Google Account
      </Button>
    </Form>
    </div>
  )
}

export default Register;
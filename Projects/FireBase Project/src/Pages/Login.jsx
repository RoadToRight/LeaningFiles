import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFirebase } from '../Context/Firebase';
import { useNavigate } from 'react-router-dom';



const Login = () => {

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
       
    }

    const handleWithGoogle = async () => {
        console.log("Login in...")
       await Firebase.GoogleSignin()
       console.log("Logged in...")

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
        Login
      </Button>
      <br /><br />
      <Button onClick={handleWithGoogle} variant="danger" type="submit">
        Sign Up With Google Account
      </Button>
    </Form>
    </div>
  )
}

export default Login;
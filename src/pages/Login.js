import { useState } from 'react'
import { Box, InputBase, Button, Typography, styled } from '@mui/material'

// Service
import request from '../service'

// MUI Styles
const Component = styled(Box)({
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  width: '65%'
})

const Container = styled(Box)({
  height: '80%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center'
})

const Input = styled(InputBase)({
  marginBottom: 10,
  marginRight: 20,
  fontSize: 18
})

const Submit = styled(Button)({
  background: '#E67E22',
  width: 150,
  marginBottom: 15
})

const Login = ({ setToken }) => {
  const [data, setData] = useState({ email: '', password: '' })
  const [hasError, setHasError] = useState(false)

  const inputChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value })

  // Log-in Button
  const loginBtn = () => {
    if (data.email.length > 5) {
      request.post('/login', {
        email: data.email,
        password: data.password,
      })
      .then(res => {
        window.localStorage.setItem('sessionToken', res.data.token)
        setToken(res.data.token)
      })
      .catch(err => {
        alert(err)
        console.error(err)
        setHasError(true)
      })
    } else
      setHasError(true)
  }

  return (
    <Component>
      <Container>
        <Input
          placeholder='Email'
          onChange={(e) => inputChange(e)}
          name='email'
        />
        <Input
          placeholder='Password'
          type='password'
          onChange={(e) => inputChange(e)}
          name='password'
        />
        {/* Log-in Button */}
        <Submit
          variant='contained'
          onClick={() => loginBtn()}
        >
          Submit
        </Submit>
        {/* Entered wrong email or password showing this: */}
        {hasError && <Typography>Email or password error</Typography>}
      </Container>
    </Component>
  )
}

export default Login

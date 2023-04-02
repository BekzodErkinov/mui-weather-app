import { useState } from 'react'
import { Box, InputBase, Button, styled } from '@mui/material'

// Service
import { getWeather } from '../service'

// MUI Styles
const Container = styled(Box)({
  background: '#445A5F',
  padding: 10,
  display: 'flex',
  justifyContent: 'space-between'
})

const Input = styled(InputBase)({
  color: '#FFF',
  marginRight: 20,
  fontSize: 18
})

const GetButton = styled(Button)({
  background: '#E67E22',
  marginTop: 5,
  width: 150
})

const Form = ({ setResult, setToken }) => {
  const [data, setData] = useState({ city: '', country: '' })

  // Input onChange
  const inputChange = (e) => {
    if (e.target.value.length > 0) {}
      setData({ ...data, [e.target.name]: e.target.value })
  }

  // Get weather information on button Click
  const getWeatherInfo = async () => {
    let response = await getWeather(data.city, data.country)
    setResult(response)
  }

  // Handle log-out
  function handleLogOut() {
    window.localStorage.removeItem('sessionToken')
    setToken(false)
  }

  return (
    <Container>
      <Box>
        <Input
          placeholder='City'
          onChange={(e) => inputChange(e)}
          name='city'
        />
        <Input
          placeholder='Country'
          onChange={(e) => inputChange(e)}
          name='country'
        />
        <GetButton
          variant='contained'
          onClick={() => getWeatherInfo()}
        >
          Get weather
        </GetButton>
      </Box>
      {/* Log-out Button */}
      <Button
        style={{ width: '150px'}}
        variant='contained'
        onClick={() => handleLogOut()}
      >
        Log out
      </Button>
    </Container>
  )
}

export default Form

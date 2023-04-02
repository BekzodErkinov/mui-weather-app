import { useState } from 'react'
import { Box, styled } from '@mui/material'

// Components
import Form from '../components/Form'
import Information from '../components/Information'

// Images
import Sunset from '../assets/images/bg.jpg'

// MUI Styles
const Component = styled(Box)({
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  margin: '0 auto',
  width: '65%',
})

const Image = styled(Box)({
  backgroundImage: `url(${Sunset})`,
  width: '27%',
  height: '80%',
  backgroundSize: 'cover',
  borderRadius: '20px 0 0 20px'
})

const Home = ({ setToken }) => {
  const [result, setResult] = useState({})

  return (
    <Component>
      <Image></Image>

      <Box style={{ width: '73%', height: '80%'}}>
        <Form setResult={setResult} setToken={setToken} />
        <Information result={result} />
      </Box>
    </Component>
  )
}

export default Home

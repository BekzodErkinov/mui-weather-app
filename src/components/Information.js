import { Box, Typography, styled } from '@mui/material'
import {
  Opacity,
  LocationOn,
  SettingsBrightness,
  Brightness5,
  Brightness6,
  Dehaze,
  Cloud
} from '@mui/icons-material'

// MUI Styles
const Row = styled(Typography)({
  padding: 10,
  display: 'flex',
  alignItems: 'center',
  fontSize: 20,
  letterSpacing: 1.5,
  '& > svg': {
    marginRight: 10
  }
})

const Error = styled(Typography)({
  color: 'red',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 30
})

const Information = ({ result }) => {
  return (
    result && Object.keys(result).length > 0 ?
      <Box style={{ margin: '30px 60px'}}>
        <Row><LocationOn />Location: {result.name}, {result.sys.country}</Row>
        <Row><SettingsBrightness />Temperature: {result.main.temp}</Row>
        <Row><Opacity />Humidity: {result.main.humidity}</Row>
        <Row><Brightness5 />Sun Rise: {new Date(result.sys.sunrise * 1000).toLocaleTimeString()}</Row>
        <Row><Brightness6 />Sun Set: {new Date(result.sys.sunset * 1000).toLocaleTimeString()}</Row>
        <Row><Dehaze />Humidity: {result.weather[0].main}</Row>
        <Row><Cloud />Clouds: {result.clouds.all}%</Row>
      </Box>
      : <Error>Please enter a values to check weather</Error>
  )
}

export default Information

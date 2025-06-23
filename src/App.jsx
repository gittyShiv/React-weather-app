import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '@mui/material/Button';
import WeatherApp from './WeatherApp';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <WeatherApp></WeatherApp>
    </div>
  )
}

export default App

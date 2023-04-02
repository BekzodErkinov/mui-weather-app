import { useState, lazy, Suspense } from 'react'

// Styles
import './assets/styles/main.css'

// Lazy load Pages
const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))

function App() {
  const [token, setToken] = useState(window.localStorage.getItem('sessionToken'))

  return (
    <div className="App">
      <Suspense fallback={<h2>Loading...</h2>}>
        {token ? (
          <Home setToken={setToken} />
          ) : (
          <Login setToken={setToken} />
        )}
      </Suspense>
    </div>
  )
}

export default App

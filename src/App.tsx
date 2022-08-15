import { useState } from 'react'
import Contador from './components/Contador'
import ContadorconHook from './components/ContadorConHook'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
        {/* // <Contador/> */}
      {/* /// <ContadorconHook/> */}
      <Login/>
    </div>
  )
}

export default App

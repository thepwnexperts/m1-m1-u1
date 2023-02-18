import { useState } from 'react'
import './css/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>Lorem, ipsum dolor.</h2>
      <h2>Dolores, omnis praesentium.</h2>
      <h2>Excepturi, nostrum quas.</h2>
      <h2>Qui, quas magnam.</h2>
    </div>
  )
}

export default App

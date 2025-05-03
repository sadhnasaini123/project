import { useState } from 'react'
import PostsList from './home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <PostsList></PostsList>
    </>
  )
}

export default App

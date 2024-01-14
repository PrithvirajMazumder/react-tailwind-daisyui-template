import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-[100svw] h-[100svh] flex flex-col justify-center items-center bg-base-300">
      <h1 className="text-2xl">Count: {count}</h1>
      <button className="btn btn-primary" onClick={() => {
        setCount(count + 1)
      }}>Increment
      </button>
    </div>
  )
}

export default App

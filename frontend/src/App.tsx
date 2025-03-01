import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card';
import MainButton from './components/MainButton';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [countFive, setCountFive] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Card title="Fancy Card" icon="🧑‍💻">
        <p>Hello, Friends!</p>
      </Card>
      <div className="card">
        <MainButton onClick={() => setCount((count) => count + 1)}
          variant='accent'
          size='lg'
          fullWidth={false}
        >
          <p>count is {count}</p>
        </MainButton>
        {/* <button onClick={() => setCountFive((countFive) => countFive + 5)}>
          count is {countFive}
        </button> */}
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

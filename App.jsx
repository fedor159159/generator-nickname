import { useState } from 'react'
import './App.css'

const prefix = ['гипер', 'ультра','сэр','теневой']
const conclusion = ['панда','хуйня','енот','волк','бучка']

function App() {
  const [name, setName] = useState('press button')
  const generator = () =>{
    const randomPrefix = prefix[Math.floor(Math.random() * prefix.length)]
    const randomConclusion = conclusion[Math.floor(Math.random() * conclusion.length)]
    setName(`${randomPrefix}${randomConclusion}`)
  }
  return (
    <>
      <div className='container'>
        <h1>{name}</h1>
        <button onClick={generator}>сгенерировать</button>
      </div>
    </>
  )
}

export default App

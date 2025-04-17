import './App.css'
import Conversation from './components/Conversation'
import Header from './components/Header'
import InputChat from './components/InputChat'

function App() {
  return (
    <div className='h-dvh border flex flex-col'>
      <Header />
      <div className='px-4 grow flex flex-col'>
        <Conversation />
        <InputChat />
      </div>
    </div>
  )
}

export default App

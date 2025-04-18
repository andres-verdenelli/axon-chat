import './App.css'
import Conversation from './components/Conversation'
import Header from './components/Header'
import InputChat from './components/InputChat'

function App() {
  return (
    <>
      <div className='h-[100dvh] flex flex-col overflow-hidden'>
        <Header />
        <div className='px-4 flex-1 flex flex-col overflow-hidden'>
          <Conversation />
          <InputChat />
        </div>
      </div>
    </>
  )
}

export default App

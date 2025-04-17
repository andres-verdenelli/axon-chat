import InputChat from './InputChat'
import Conversation from './Conversation'

function Chat() {
  return (
    <div className='px-4'>
      <Conversation />
      <InputChat></InputChat>
    </div>
  )
}
export default Chat

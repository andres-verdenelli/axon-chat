import { Send } from 'lucide-react'
import IconButton from './IconButton'

function InputChat() {
  return (
    <div className='border border-neutral-300 rounded-lg flex p-2'>
      <input
        className='w-full focus:outline-none ml-1'
        type='text'
        name=''
        id=''
        placeholder='Ask anything...'
      />
      <IconButton onClick={() => console.log('clicked')}>
        <Send />
      </IconButton>
    </div>
  )
}

export default InputChat

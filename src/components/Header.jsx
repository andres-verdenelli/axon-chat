import { Menu, MessageCirclePlus } from 'lucide-react'
import IconButton from './IconButton'

function Header() {
  return (
    <header className='border-b border-neutral-200'>
      <div className='flex justify-between p-4 items-center'>
        <div>
          <IconButton>
            <Menu />
          </IconButton>
        </div>
        <div className='font-semibold'>
          <h1>Axon Chat</h1>
        </div>
        <div>
          <IconButton>
            <MessageCirclePlus />
          </IconButton>
        </div>
      </div>
    </header>
  )
}
export default Header

function Conversation() {
  return (
    <div className='flex-1 overflow-y-auto'>
      <p>conversation</p>
      {Array(30)
        .fill(0)
        .map((_, i) => (
          <p
            key={i}
            className='my-2'
          >
            Mensaje de prueba {i + 1}
          </p>
        ))}
    </div>
  )
}

export default Conversation

function IconButton({ children, ...props }) {
  return (
    <button
      {...props}
      className='hover:bg-neutral-100 rounded-lg p-1'
    >
      {children}
    </button>
  )
}
export default IconButton

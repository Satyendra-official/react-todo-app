import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-gray-500 text-white py-2 w-full'>
      <div className='logo'>
      <span className='font-bold text-xl mx-9'>Todo</span>
      </div>
      <ul className='flex gap-8 mx-8'>
      <li className='cursor-pointer hover:font-bold'>Home</li>
      <li className='cursor-pointer hover:font-bold'>Tasks</li>
      </ul>
    </nav>
  )
}

export default Navbar

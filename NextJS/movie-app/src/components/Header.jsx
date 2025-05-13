import React from 'react'
import MenuItem from './MenuItem'
import Link from 'next/link'

export default function Header() {
  return (
    <nav className="p-4 flex items-center justify-between sticky top-0 max-w-6xl mx-auto">
      <div className='flex gap-4'>
        <MenuItem title="Home" address="/"/>
        <MenuItem title="About" address="/about"/>
      </div>
      <div className='flex gap-1 items-center'>
        <Link href="/">
          <span className='text-2xl font-bold bg-green-600 py-1 px-2 rounded-lg'>Movie</span>
          <span className='text-xl hidden sm:inline'>App</span>
        </Link>
      </div>
      
    </nav>
  )
}

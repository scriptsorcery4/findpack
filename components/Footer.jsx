import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <div className='p-4 flex justify-center'>
        <div className='flex gap-2'>
            <p className='font-medium'>Build with ♥ by</p>
            <Link target='blank_' className='font-bold hover:underline transition-transform duration-300' href='https://x.com/Scriptsorcery4'>Scriptsorcery4</Link>
        </div>
    </div>
  )
}

export default Footer
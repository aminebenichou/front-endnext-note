import Link from 'next/link'
import React from 'react'

const MenuButton = ({item, selected}) => {
  return (
    <div className={selected ? 'py-3 px-2 border-l-4 border-sky-500 bg-sky-100' : 'py-3 px-2 hover:border-l-4 border-sky-500 hover:bg-sky-100'}>
        <Link href={item.link} className='flex mr-2'>
            <item.icon className="mr-2" />
            <h3>{item.title}</h3>
        </Link>
    </div>
  )
}

export default MenuButton
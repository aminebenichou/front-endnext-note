'use client'
import React, { useState } from 'react'
import { createNote } from '../requests'

const CreateNote = () => {
  const [note, setNote] = useState({
    title: '',
    content: ''
  })
//   const [submitted, setSubmitted] = useState(false)
  const submitNote = ()=>{
    console.log(note)
    createNote(note)
  }
  const handleChange = (e) => {
    const { name, value } = e.target
    setNote((prevNote) => ({ ...prevNote, [name]: value }))
  }

  return (
    <div className='flex flex-col border m-5 p-5 shadow-md w-[100%]'>
      <input 
        className='mb-10 border p-10'
        type="text" 
        name="title" 
        value={note.title} 
        onChange={handleChange} 
        placeholder="Title" 
      />
      <textarea 
        className='mb-10 border p-10'

        name="content" 
        value={note.content} 
        onChange={handleChange} 
        placeholder="Content" 
      />
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-5 
      px-10 rounded' onClick={()=>submitNote()} >Create Note</button>
    </div>
  )
}

export default CreateNote
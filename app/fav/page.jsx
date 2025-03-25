"use client"
import React, { useEffect, useState } from 'react'
import NoteCard from '../components/note'
import { getFavoriteNotes } from '../requests'

const FavoritesPage = () => {
  
  const [notes, setNotes] = useState([])
  const [refresh, setRefresh] = useState(false)
  useEffect(()=>{
    getFavoriteNotes().then((data)=>setNotes(data))
  },[refresh])

  return (
    <div className='w-[100%] flex flex-wrap'>
      {
        notes.map((note)=><NoteCard note={note} key={note.id} refresh={()=>{
          setRefresh(!refresh)
        }} />)
      }
    </div>
  )
}

export default FavoritesPage
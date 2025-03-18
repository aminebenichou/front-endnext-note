import React from 'react'
import NoteCard from '../components/note'

const FavoritesPage = () => {
  const notes = [
    { id: 1, title: "Note 1", content: "This is the content of note 1", date:"25 September, 2024", favorite: true },
    { id: 2, title: "Note 2", content: "This is the content of note 2", date:"25 August, 2024" },
    { id: 3, title: "Note 3", content: "This is the content of note 3", date:"25 June, 2024" },
    { id: 4, title: "Note 4", content: "This is the content of note 4", date:"25 January, 2024" },
    { id: 5, title: "Note 5", content: "This is the content of note 5", date:"25 March, 2024" },
    { id: 6, title: "Note 6", content: "This is the content of note 6", date:"25 December, 2024" },
  ];

  return (
    <div className='w-[100%] flex flex-wrap'>
      {
        notes.map((note)=><NoteCard note={note} key={note.id} />)
      }
    </div>
  )
}

export default FavoritesPage
"use client"
import React, { useState } from 'react'
import InputComp from './input'

const Search = ({
    displayedNotes,
    onNotesSorted,
    isCleared
}) => {

    const [notes, setNotes] = useState(displayedNotes)
    function sortNotes(e) {
        setNotes(notes.filter(note => note.title.toLowerCase().includes(e.target.value.toLowerCase())))
        onNotesSorted(notes)
        e.target.value === "" && isCleared(true)
    }
    
    return (
        <div className='h-1/6 flex justify-center items-center'>
            <InputComp type="search" label="Search" onChange={sortNotes} />
        </div>
    )
}

export default Search
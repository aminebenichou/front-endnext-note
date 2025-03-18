"use client"
import { useEffect, useState } from "react";
import NoteCard from "./components/note";
import Search from "./components/search";
import { getAllNotes } from "./requests";

export default function Home() {

  const [notes, setNotes] = useState([])
  useEffect(()=>{
    getAllNotes().then((data)=>{
      setNotes(data)
    })
  }, [])
  
  const [sortedNotes, setSortedNotes] = useState(notes)
  
  // function search(data) {
  //   setSortedNotes(data)
  // }
  // function isCleared(data) {
  //   data && setSortedNotes(notes)
  // }
  return (
    <div>
      {/* <Search isCleared={isCleared} onNotesSorted={search} displayedNotes={sortedNotes} /> */}
      <div className="flex flex-wrap">
      {
        notes.map((note)=>(
          <NoteCard note={note} key={note.id} />
        ))
      }

      </div>
      
    </div>
  );
}

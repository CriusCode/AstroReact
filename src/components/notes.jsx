import { useEffect, useState } from "react";
import ArrayLib from "../lib/array-lib";
import { NoteManager } from "../api/note-manager";
import Counter from "./Counter";
import Filters from "./Filters";
import NoteList from "./NoteList";
import AddNoteForm from "./AddNoteForm";

function Notes() {
  const [notesRAW, setNotesRAW] = useState([]);
  const [notes, setNotes] = useState([]);
  const [filters, filtersSetter] = useState({ keyword: "" });

  useEffect(() => {
    NoteManager.list().then((loadedNotes) => {
      setNotesRAW(loadedNotes);
      setNotes(loadedNotes);
    });
  }, []);

  function onRemoveBtnHandler(noteToDelete) {
    const noteRawNewValues = ArrayLib.remove(notesRAW, noteToDelete);
    setNotesRAW(noteRawNewValues);
    setNotes(noteRawNewValues);

    if (noteToDelete.id) {
      NoteManager.remove(noteToDelete.id).then(() =>
        console.log("Note supprimée côté serveur")
      );
    }
  }

  function onNoteAddedHandler(newNote) {
    NoteManager.create(newNote)
      .then(() => NoteManager.list())
      .then((data) => {
        setNotesRAW(data);
        setNotes(data);
      });
  }

  function onFilterChangedHandler(keyword) {
    filtersSetter({ keyword });
    if (keyword.length > 0) {
      setNotes(
        notesRAW.filter((n) =>
          n.text.toLowerCase().includes(keyword.toLowerCase())
        )
      );
    } else {
      setNotes(notesRAW);
    }
  }

  return (
    <>
      <Counter notes={notes} />
      <AddNoteForm onNoteAdded={onNoteAddedHandler} />
      <Filters filters={filters} onFilterChanged={onFilterChangedHandler} />
      <NoteList notes={notes} onRemoveBtn={onRemoveBtnHandler} />
    </>
  );
}

export default Notes;

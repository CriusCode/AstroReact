import "./App.css";
import AddNoteForm from "./components/AddNoteForm";
import Counter from "./components/Counter";
import Filters from "./components/Filters";
import NoteList from "./components/NoteList";
import { Fragment, useState } from "react";
import RandomAnswer from "./components/RandomAnswer";

function App() {
  const [notes, setNotes] = useState([
    { id: 1, text: "première note" },
    { id: 2, text: "deuxième note" },
    { id: 3, text: "troisième note" },
  ]);

  function onRemoveBtnHandler(noteToDelete) {
    const newNotes = notes.filter((note) => note.id !== noteToDelete.id);
    setNotes(newNotes);
  }

  return (
    <>
      <h1>Application de divination</h1>
      <Counter notes={notes} />
      <AddNoteForm />
      <Filters />
      <NoteList notes={notes} onRemoveBtn={onRemoveBtnHandler} />
      <RandomAnswer />
    </>
  );
}

export default App;

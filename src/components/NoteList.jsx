const NoteList = ({ notes, onRemoveBtn }) => {
    // **État local non nécessaire**
    // const [notesState, setNotesState] = useState(notes);
  
    const handleRemoveNote = (indexToRemove) => {
        // Utilise la prop `notes` reçue en argument
        const newNotes = notes.filter((note, index) => index !== indexToRemove);
      console.log(handleRemoveNote);
        // Appel de la fonction de suppression du composant parent (si nécessaire)
        onRemoveBtn(newNotes);
        console.log(onRemoveBtn);
      };
      
    return (
      <>
        <p>Vos questions :</p>
        <ul>
          {notes.map((note, index) => (
            <li key={index}>
              {note.text}
              &nbsp;
              <button onClick={() => handleRemoveNote(index)}>X</button>
            </li>
          ))}
        </ul>
      </>
    );
  };

  export default NoteList;
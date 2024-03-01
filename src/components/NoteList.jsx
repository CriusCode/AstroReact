export default function NoteList({ notes, onRemoveBtn }) {
  // Génère des LI pour chaque note
  const listNotes = notes.map((note, index) => (
    <li key={index}>
      {note.text}
      &nbsp;
      <button onClick={(event) => onRemoveBtn(index)}>X</button>
    </li>
  ));

  return (
    <>
      <p>Vos questions :</p>
      <ul>{listNotes}</ul>
    </>
  );
}

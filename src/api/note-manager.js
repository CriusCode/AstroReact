const apiAdress='http://localhost:9000/';
const NoteManager = {
  async list() {
    const response = await fetch(apiAdress+"notes");
    return await response.json();
  },

  async create(note) {
    const userID=1;
    let contentNote={
      user: userID,
      noteContent: note.text
      };
    console.log(contentNote);
    const response = await fetch(apiAdress+"notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contentNote),
    });
    return await response.json();
  },

  async update(id, note) {
    const response = await fetch(`${apiAdress}notes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
    return await response.json();
  },

  async remove(id) {
    const response = await fetch(`${apiAdress}notes/${id}`, {
      method: "DELETE",
    });
    return await response.json();
  },
};
 
export { NoteManager };

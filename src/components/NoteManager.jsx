const NoteManager = {
  async list() {
    const response = await fetch("/api/get-questions");
    return await response.json();
  },

  async create(note) {
    const response = await fetch("/api/add-question", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
    return await response.json();
  },

  async remove(id) {
    const response = await fetch(`/api/remove-question/${id}`, {
      method: "DELETE",
    });
    return await response.json();
  },
};

export { NoteManager };

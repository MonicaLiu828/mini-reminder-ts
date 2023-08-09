import React, { useState } from "react";

interface NewReminderProps {
  onAddReminder: (title: string) => void;
}

function NewReminder({ onAddReminder }: NewReminderProps) {
  const [title, setTitle] = useState("");

  const submitForm = (e: React.FormEvent) => {
    if (!title) return;
    e.preventDefault();
    onAddReminder(title);
    setTitle("");
  };
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="title"></label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        id="title"
        className="form-control"
      ></input>
      <button type="submit" className="btn btn-primary rounded-pill my=3">
        Add Reminder
      </button>
    </form>
  );
}
export default NewReminder;

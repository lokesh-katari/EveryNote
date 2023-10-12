import { useState } from "react";
import NoteContext from "./noteContext";
const port = "http://localhost:5000";
const NoteState = (props) => {
  const primarynote = [];

  const [notes, setnotes] = useState(primarynote);

  //state for adding a note
  const addnote = async (note) => {
    //for api call in backend
    try {
      const res = await fetch(`${port}/api/note/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
        body: JSON.stringify({
          title: note.title,
          description: note.description,
          tag: note.tag,
        }),
      });
      const result = await res.json();

      console.log("Success from backend:", result);

      //for frontend
      const newNote = {
        _id: result._id,
        user: result.user,
        title: note.title,
        description: note.description,
        tag: "general",
        __v: 0,
      };

      console.log(`this is new note saved with result id ${result.user}`);
      setnotes(notes.concat(newNote));
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const fetchNotes = async () => {
    try {
      const res = await fetch(`${port}/api/note/fetchnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
      });
      const result = await res.json();
      console.log("Success:", result);
      setnotes(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  //state for deleting a note
  const deletenote = async (id) => {
    //for api call in backend
    try {
      await fetch(`${port}/api/note/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
      });
    } catch (error) {
      console.error("Error:", error);
    }

    //for frontend
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setnotes(newNotes);
  };

  //state for update a note
  const updatenote = async (id, title, description, tag) => {
    // API Call
    const res = await fetch(`${port}/api/note/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("auth-token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    await res.json();

    let newNotes = JSON.parse(JSON.stringify(notes));
    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setnotes(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, addnote, deletenote, updatenote, fetchNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;

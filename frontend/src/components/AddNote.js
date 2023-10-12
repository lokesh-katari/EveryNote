import React, { useState, useContext } from "react";
import NoteContext from "../context/noteContext";

const AddNote = () => {
  const context = useContext(NoteContext);

  const { addnote } = context;

  const [note, setnote] = useState({
    title: "",
    description: "",
    tag: "",
  });

  const handleInputs = (e) => {
    e.preventDefault();
    setnote({ ...note, [e.target.name]: e.target.value });
  };
  const addNote = (e) => {
    e.preventDefault();
    addnote(note);
    setnote({ title: "", description: "", tag: "" });
  };
  return (
    <div
      className="pt-4 "
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className=" container  col-md-6  mx-5 card rounded-4">
        <h1 className="d-inline">Your note here</h1>
        <form>
          <div className="col-md-6">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control col-md-6"
              id="title"
              name="title"
              onChange={handleInputs}
              value={note.title}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              onChange={handleInputs}
              value={note.description}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="tag" className="form-label">
              tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              onChange={handleInputs}
              value={note.tag}
            />
          </div>
          <div className="form-check"></div>
          <button
            type="submit"
            className={`btn btn-primary my-3 ${
              note.title.length < 3 || note.description.length < 5
                ? "disabled"
                : ""
            }`}
            onClick={addNote}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;

import React from "react";
import { useContext} from "react";
import NoteContext from "../context/noteContext";

const NoteItem = (props) => {
    const context = useContext(NoteContext);

    const {deletenote}=context;
  const { note,updateNote } = props;




  return (
    <>
     
    <div className="card mx-3 col-2 my-4">
    <div className=" card-body ">
        <div className="d-flex">
          <h5 className="card-title">{note.title}</h5>
          <i className="fa-solid fa-pen-to-square mx-3 my-2" onClick={()=>{updateNote(note)}}></i>
          <i className="fa-solid fa-delete-left my-2" onClick={()=>{
            deletenote(note._id);
          }}></i>
        </div>
        <h6 className="card-subtitle mb-2 text-muted">{note.tag}</h6>
        <p className="card-text">{note.description}</p>
      </div>
    </div>
    </>
  );
};

export default NoteItem;
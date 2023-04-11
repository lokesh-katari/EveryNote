import React from 'react'
import { useState ,useContext,useRef} from 'react';
import NoteContext from '../context/noteContext';

const Modal = (props) => {
    const context = useContext(NoteContext);
    const {updatenote}=context;
    const ref = useRef("");

    const [edited, setEdited] = useState(props.notes)
    const handleInputs = (e) => {
        e.preventDefault();
        setEdited({ ...edited, [e.target.name]: e.target.value });
      };
      
  return (
  <>
    <button
        type="button"
      ref={ref}
        className="btn btn-primary "
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        {/* dont delete this button this act as a reference for the edit button by using useref hook */}
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h1>Your note here</h1>
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    onChange={handleInputs}
                   value={edited.title}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    name="description"
                    onChange={handleInputs}
                    value={edited.description} 
                    />
                   
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="tag"
                    name="tag"
                    onChange={handleInputs}
                    value={edited.tag}

                  

                  />
                </div>

                <div className="modal-footer">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={()=>{
                      updatenote(edited,edited._id)
                    }}
                  >
                    save changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div></>
  )
}

export default Modal
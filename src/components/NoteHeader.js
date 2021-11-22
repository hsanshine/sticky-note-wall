import react from "react";
import "./NoteHeader.css";
import ColorSelection from "./ColorSelection";

const NoteHeader = (props) => {
  return (
    <div className="note__outer-header">
      <div className="note__header">
        <div>
          <h1 className="note__title"> {props.title} </h1>
        </div>
        <ColorSelection
          id={props.id}
          color={props.color}
          onChangeColor={props.onChangeColor}
        />
      </div>
      <div className="note__created-text">
        {" "}
        <small>
          {" "}
          created -{" "}
          <time>
            {props.createdDate.day} {props.createdDate.month}{" "}
            {props.createdDate.year}
          </time>{" "}
        </small>
      </div>
    </div>
  );
};

export default NoteHeader;

import react from "react";
import "./NoteFooter.css";

const NoteFooter = (props) => {
  return (
    <div className="note__footer">
      {" "}
      <small>
        {" "}
        last edited -{" "}
        <time>
          {" "}
          {props.lastEditedDate.day} {props.lastEditedDate.month}{" "}
          {props.lastEditedDate.year}
        </time>
      </small>
    </div>
  );
};

export default NoteFooter;

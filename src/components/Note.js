import react from "react";
import "./Note.css";

import NoteText from "./NoteText";
import NoteHeader from "./NoteHeader";
import NoteFooter from "./NoteFooter";
const Note = (props) => {
  const title = props.title;
  const createdDate = props.createdDate;
  const lastEditedDate = props.lastEditedDate;
  const textEntry = props.textEntry;
  let classes = "note " + props.color; // sets the background color of the note
  return (
    <div className={classes}>
      {/* <EditableNoteHeader /> */}
      <NoteHeader
        title={title}
        createdDate={createdDate}
        id={props.id}
        color={props.color}
        onChangeColor={props.onChangeColor}
      />
      {/* < EditableNoteText /> */}
      <NoteText textEntry={textEntry} />
      {/* <EditNoteText /> */}

      <NoteFooter lastEditedDate={lastEditedDate}></NoteFooter>
    </div>
  );
};

export default Note;

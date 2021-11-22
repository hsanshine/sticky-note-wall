import react from "react";
import "./NotesList.css";
import Note from "./Note";
import AddButton from "./AddButton";
const NotesList = (props) => {
  const notesArray = props.notes.map((SingleNoteData) => {
    let id = SingleNoteData.id;
    let key = SingleNoteData.key;
    let title = SingleNoteData.title;
    let text = SingleNoteData.text;
    let createdMonth = SingleNoteData.createdDate.toLocaleString("en-US", {
      month: "long",
    });
    let createdDay = SingleNoteData.createdDate.toLocaleString("en-US", {
      day: "2-digit",
    });
    let createdYear = SingleNoteData.createdDate.getFullYear();

    let editedMonth = SingleNoteData.lastEditedDate.toLocaleString("en-US", {
      month: "long",
    });
    let editedDay = SingleNoteData.lastEditedDate.toLocaleString("en-US", {
      day: "2-digit",
    });
    let editedYear = SingleNoteData.lastEditedDate.getFullYear();
    let color = SingleNoteData.color;
    return (
      <Note
        id={id}
        title={title}
        textEntry={text}
        createdDate={{
          month: createdMonth,
          year: createdYear,
          day: createdDay,
        }}
        lastEditedDate={{
          month: editedMonth,
          year: editedYear,
          day: editedDay,
        }}
        color={color}
        key={key}
        onChangeColor={props.onChangeColor}
      />
    );
  });
  return (
    <div>
      <div className="note-list-header ">
        <AddButton />
      </div>
      <div className="note-list">{notesArray}</div>
    </div>
  );
};

export default NotesList;

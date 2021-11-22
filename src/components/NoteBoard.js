import react, { useState } from "react";
import Note from "./Note";
import "./NoteBoard.css";

import NotesList from "./NotesList";
import AddButton from "./AddButton";

//the borad component renders the notes

const NoteBoard = () => {
  const noteDataSeed = [
    {
      id: 1,
      key: 1,
      title: "new note",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
              numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
              optio, eaque rerum! Provident similique accusantium nemo aute.`,
      createdDate: new Date(2020, 11, 17, 13, 24, 0),
      lastEditedDate: new Date(2020, 11, 17, 13, 24, 0),
      color: `leaf-color`,
    },
    {
      id: 2,
      key: 2,
      title: "new note",
      text: `Veritatis
            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
            nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
            tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
            quia. Quo neque error repudiandae fuga?`,
      createdDate: new Date(2019, 11, 17, 13, 24, 0),
      lastEditedDate: new Date(2019, 11, 17, 13, 24, 0),
      color: `leaf-color`,
    },
    {
      id: 3,
      key: 3,
      title: "new note",
      text: `Ipsa laudantium molestias eos 
              sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
              recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
              minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
              quibusdam sed amet tempora.`,
      createdDate: new Date(2020, 12, 17, 13, 24, 0),
      lastEditedDate: new Date(2020, 12, 17, 13, 24, 0),
      color: `banana-color`,
    },
    {
      id: 4,
      key: 4,
      title: "new note",
      text: ``,
      createdDate: new Date(2021, 11, 17, 13, 24, 0),
      lastEditedDate: new Date(2021, 11, 17, 13, 24, 0),
      color: `sky-color`,
    },
    {
      id: 5,
      key: 5,
      title: "new note",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
              numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
              optio, eaque rerum! Provident similique accusantium nemo autem.`,
      createdDate: new Date(2020, 11, 17, 13, 24, 0),
      lastEditedDate: new Date(2020, 11, 17, 13, 24, 0),
      color: `leaf-color`,
    },
    {
      id: 6,
      key: 6,
      title: "new note",
      text: `Veritatis
            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
            nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
            tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
            quia. Quo neque error repudiandae fuga?`,
      createdDate: new Date(2019, 11, 17, 13, 24, 0),
      lastEditedDate: new Date(2019, 11, 17, 13, 24, 0),
      color: `leaf-color`,
    },
    {
      id: 7,
      key: 7,
      title: "new note",
      text: `Ipsa laudantium molestias eos 
              sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
              recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
              minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
              quibusdam sed amet tempora.
              https://github.com/hsanshine/finding-shortest-paths-using-Dijkstra-s-algorithm.git`,
      createdDate: new Date(2020, 12, 17, 13, 24, 0),
      lastEditedDate: new Date(2020, 12, 17, 13, 24, 0),
      color: `banana-color`,
    },
  ];

  //state data
  const [noteData, setNoteData] = useState(noteDataSeed);

  //handler functions
  const onChangeColorHandler = (id, newColor) => {
    const newState = noteData.map((singleNoteData) => {
      if (singleNoteData.id === id)
        return { ...singleNoteData, color: newColor, sth: "i have changed" };
      else return { ...singleNoteData, now: "sth here" };
    });

    setNoteData(newState);
  };
  return (
    <div className="note-board">
      <NotesList notes={noteData} onChangeColor={onChangeColorHandler} />
    </div>
  );
};

export default NoteBoard;

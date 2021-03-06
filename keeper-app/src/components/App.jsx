import React, {useState} from 'react';
import CreateArea from './CreateArea.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Note from './Note.jsx';


function App() {

    const [allNotes, setAllNotes] = useState([]);

    //append new note to stateful array of notes
    function addNote(newNote) {
        setAllNotes( (prevNotes) => {
            return ([
                ...prevNotes,
                {
                    key: prevNotes.length + 1,
                    title: newNote.title,
                    content: newNote.content
                }
            ]);
        });
    }

    function deleteNote(noteId) {
        const newNotes = allNotes.filter( note => note.key !== noteId );
        setAllNotes(newNotes);
    }


    return (
        <div>
            <Header />
            <CreateArea
                returnNewNote={addNote}
            />
            {allNotes.map(note => (
                <Note
                    key={note.key}
                    id={note.key}
                    title={note.title}
                    content={note.content}
                    returnNoteToDelete={deleteNote}
                />
            ))}
            <Footer />
        </div>
    )
}

export default App;

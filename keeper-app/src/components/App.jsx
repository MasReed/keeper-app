import React, {useState} from 'react';
import CreateArea from './CreateArea.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Note from './Note.jsx';
import TEMPnotes from '../notes.js';


function App() {

    const [allNotes, setAllNotes] = useState(TEMPnotes);

    //update stateful array of notes
    function addNote(title, content) {
        setAllNotes( (prevNotes) => {
            return ([
                ...prevNotes,
                {
                    key: prevNotes.length + 1,
                    title: title,
                    content: content
                }
            ]);
        });
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
                    title={note.title}
                    content={note.content}
                />
            ))}
            <Footer />
        </div>
    )
}

export default App;

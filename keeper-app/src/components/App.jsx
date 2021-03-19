import React, {useState} from 'react';
import CreateArea from './CreateArea.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Note from './Note.jsx';
import TEMPnotes from '../notes.js';


function App() {

    const [allNotes, setAllNotes] = useState(TEMPnotes);

    //update stateful array of notes
    function getNewNote(title, content) {
        setAllNotes( (prevNotes) => {
            return ([
                ...prevNotes,
                {
                    title: title,
                    content: content
                }
            ])
        });
    }

    return (
        <div>
            <Header />
            <CreateArea
                getNewNote={getNewNote}
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

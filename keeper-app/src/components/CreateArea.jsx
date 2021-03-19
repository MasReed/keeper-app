import React, {useState} from 'react';

function CreateArea(props) {

    const [noteTitle, setNoteTitle] = useState('');
    const [noteContent, setNoteContent] = useState('');

    function handleTitleChange(event) {
        setNoteTitle(event.target.value);
    }

    function handleContentChange(event) {
        setNoteContent(event.target.value);
    }

    return (
        <div>
            <form>
                <input name='title' onChange={handleTitleChange} placeholder='Title' value={noteTitle}/>
                <textarea name='content' onChange={handleContentChange} placeholder='Take a note...' rows='3' value={noteContent}/>
                <button type='submit'
                    onClick={ (e) => {
                        e.preventDefault();
                        props.returnNewNote(noteTitle, noteContent);
                        setNoteTitle('');
                        setNoteContent('');
                    }}
                >Add</button>
            </form>
        </div>
    );
}

export default CreateArea;

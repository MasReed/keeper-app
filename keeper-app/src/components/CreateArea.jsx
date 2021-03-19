import React, {useState} from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

    const [noteTitle, setNoteTitle] = useState('');
    const [noteContent, setNoteContent] = useState('');
    const [isExpanded, setExpanded] = useState(false);


    function handleTitleChange(event) {
        setNoteTitle(event.target.value);
    }

    function handleContentChange(event) {
        setNoteContent(event.target.value);
    }

    function expand() {
        setExpanded(true);
    }

    return (
        <div>
            <form className='create-note'>
                {isExpanded &&
                <input
                    name='title'
                    onChange={handleTitleChange}
                    placeholder='Title'
                    value={noteTitle}
                />
                }
                <textarea
                    name='content'
                    onClick={expand}
                    onChange={handleContentChange}
                    placeholder='Take a note...'
                    rows={isExpanded ? '3' : '1'}
                    value={noteContent}
                />
                <Zoom in={isExpanded}>
                    <Fab
                        type='submit'
                        onClick={ (e) => {
                            e.preventDefault();
                            props.returnNewNote(noteTitle, noteContent);
                            setNoteTitle('');
                            setNoteContent('');
                        }}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;

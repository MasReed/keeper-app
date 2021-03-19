import React, {useState} from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

    // Note hook and handler
    const [note, setNote] = useState({
        title: '',
        content: ''
    });

    function handleChange(event) {
        const {name, value} = event.target
        setNote( prevField => {
            return {
                ...prevField,
                [name]: value
            }
        });
    }


    // Stylistic hook and handler
    const [isExpanded, setExpanded] = useState(false);

    function expand() {
        setExpanded(true);
    }


    return (
        <div>
            <form className='create-note'>
                {isExpanded &&
                <input
                    name='title'
                    onChange={handleChange}
                    placeholder='Title'
                    value={note.title}
                />
                }
                <textarea
                    name='content'
                    onClick={expand}
                    onChange={handleChange}
                    placeholder='Take a note...'
                    rows={isExpanded ? '3' : '1'}
                    value={note.content}
                />
                <Zoom in={isExpanded}>
                    <Fab
                        type='submit'
                        onClick={ (event) => {
                            event.preventDefault();
                            props.returnNewNote(note);
                            setNote({
                                title: '',
                                content: ''
                            });
                        }}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;

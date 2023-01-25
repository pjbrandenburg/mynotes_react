import React, { useEffect, useState } from 'react'
//import notes from '../assets/data'
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'

const NotePage = ( {match} ) => {
    let noteId = match.params.id
    // const {id} = useParams()

    let [note, setNote] = useState(null)
    //const noteId = note.find(note => note.id===Number(id))
    

    useEffect(() => {
        getNote()
    }, [noteId])

    let getNote = async () => {
        let response = await fetch(`http://localhost:3002/notes/${noteId}`)
        let data = await response.json()
        setNote(data)
    }
    
    return (
        <div className='note'>
            <div className='note-header'>
                <h3>
                    <Link to='/'>
                        <ArrowLeft />
                    </Link>
                </h3>
            </div>
            <textarea value={note?.body}>
                
            </textarea>
        </div>
    )
}

export default NotePage
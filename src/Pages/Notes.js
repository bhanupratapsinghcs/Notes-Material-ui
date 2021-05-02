import { Container, Grid } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import NoteCard from '../Components/NoteCard'
import Masonry from "react-masonry-css"

export default function Notes() {

    const [notes, setNotes] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/notes')
            .then(res => res.json())
            .then(data => setNotes(data))
    }, [])

    const handleDelete = async (id) => {
        await fetch('http://localhost:8000/notes/' + id, {
            method: 'DELETE'
        })
        const newNotes = notes.filter(note => note.id != id)
        setNotes(newNotes)
    }
    const breakpoint = {
        default: 3,
        1100: 2,
        720: 1
    }
    return (
        <Container>
            <Masonry
                breakpointCols={3}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {/* array of JSX items */}

                {
                    notes.map(note => (
                        <div item key={note.id} xs={12} md={6} lg={4}>
                            <NoteCard note={note} handleDelete={handleDelete} />
                        </div>
                    ))
                }
            </Masonry>
        </Container>
    )
}

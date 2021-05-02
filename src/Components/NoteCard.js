import { Avatar, Card, CardContent, CardHeader, IconButton, makeStyles, Typography } from '@material-ui/core'
import { blue, green, orange, red, yellow } from '@material-ui/core/colors'
import { DeleteOutlined } from '@material-ui/icons'
import React from 'react'

const useStyles = makeStyles({
    outlined: {
        border: (note) => {
            if (note.category == 'work') {
                return '1px solid red'
            }
        }
    },
    avatar: {
        backgroundColor: (note) => {

            if (note.category == 'money') {
                return yellow[700]
            }
            if (note.category == 'todos') {
                return red[600]
            }
            if (note.category == 'reminders') {
                return green[700]
            }
            return blue[500]

        }
    }
})

export default function NoteCard({ note, handleDelete }) {
    const classes = useStyles(note)
    return (
        <Card elevation={3} className={classes.outlined}>
            <CardHeader
                avatar={
                    <Avatar className={classes.avatar}>
                        {note.category[0].toUpperCase()}
                    </Avatar>
                }
                action={
                    <IconButton onClick={() => handleDelete(note.id)}>
                        <DeleteOutlined />
                    </IconButton>
                }
                title={note.title}
                subheader={note.category}
            />
            <CardContent>
                <Typography variant='body2' color="textSecondary">
                    {note.details}
                </Typography>
            </CardContent>
        </Card>
    )
}

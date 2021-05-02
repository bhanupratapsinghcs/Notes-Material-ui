import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { FormControl, FormControlLabel, FormLabel, makeStyles, Radio, RadioGroup } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    }
})

export default function Create() {
    const classes = useStyles()
    const [title, setTitle] = useState("")
    const [details, setDetails] = useState("")
    const [titleError, setTitleError] = useState(false)
    const [detailsError, setDetailsError] = useState(false)
    const [category, setCategory] = useState('todos')
    const handleSubmit = (e) => {
        e.preventDefault()
        setTitleError(false)
        setDetailsError(false)

        if (title === '') {
            setTitleError(true)
        }
        if (details === '') {
            setDetailsError(true)
        }
        if (title && details && category) {
            console.log(title, details, category)
        }
    }

    return (
        <Container>
            <Typography
                className={classes.title}
                variant='h4'
                component='h2'
                gutterBottom
                color='textSecondary'
            >
                Create a New Note
            </Typography>

            <form noValidate autoComplete='off' onSubmit={handleSubmit}>
                <TextField
                    onChange={(e) => setTitle(e.target.value)}
                    className={classes.field}
                    label="Note Title"
                    variant='outlined'
                    color='secondary'
                    fullWidth
                    required
                    error={titleError}
                />
                <TextField
                    onChange={(e) => setDetails(e.target.value)}
                    className={classes.field}
                    label="Details"
                    variant='outlined'
                    color='secondary'
                    multiline
                    rows={4}
                    fullWidth
                    required
                    error={detailsError}
                />
                <FormControl className={classes.field}>
                    <FormLabel>Note Category</FormLabel>
                    <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
                        <FormControlLabel value='money' control={<Radio />} label="Money"></FormControlLabel>
                        <FormControlLabel value='todos' control={<Radio />} label="Todos"></FormControlLabel>
                        <FormControlLabel value='reminders' control={<Radio />} label="Reminders"></FormControlLabel>
                        <FormControlLabel value='work' control={<Radio />} label="Work"></FormControlLabel>
                    </RadioGroup>
                </FormControl>
                <Button
                    className={classes.btn}
                    type='submit'
                    color='secondary'
                    variant='contained'
                    // startIcon={<SendIcon />}
                    endIcon={<KeyboardArrowRightIcon />}
                >
                    Submit
                </Button>

            </form>


            {/* <Button type='submit' variant='outlined' color='secondary' > Submit</Button>
            <ButtonGroup color="primary" variant="contained" aria-label="contained primary button group">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup> */}
        </Container>
    )
}

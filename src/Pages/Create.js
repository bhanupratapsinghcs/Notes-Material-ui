import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'

export default function Create() {
    return (
        <Container>
            <Typography
                variant='h6'
                component='h2'
                gutterBottom
                color='textSecondary'
            >
                Create a New Note
            </Typography>
            <Button
                onClick={() => console.log("Clicked")}
                type='submit'
                color='secondary'
                variant='contained'
            >
                Submit
            </Button>
            {/* <Button type='submit' variant='outlined' color='secondary' > Submit</Button>
            <ButtonGroup color="primary" variant="contained" aria-label="contained primary button group">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup> */}
        </Container>
    )
}

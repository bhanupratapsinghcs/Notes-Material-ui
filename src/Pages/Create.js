import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({

})

export default function Create() {
    const classes = useStyles()
    return (
        <Container>
            <Typography
                className={classes.title}
                variant='h6'
                component='h2'
                gutterBottom
                color='textSecondary'
            >
                Create a New Note
            </Typography>
            <Button
                className={classes.btn}
                onClick={() => console.log("Clicked")}
                type='submit'
                color='primary'
                variant='contained'
                // startIcon={<SendIcon />}
                endIcon={<KeyboardArrowRightIcon />}
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

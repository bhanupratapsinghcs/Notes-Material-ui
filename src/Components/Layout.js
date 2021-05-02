import { AppBar, Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar, Typography, Avatar } from '@material-ui/core'
import { AddCircleOutlineRounded, SubjectOutlined } from '@material-ui/icons';
import React from 'react'
import { useHistory, useLocation } from 'react-router';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
    return {
        root: {
            display: 'flex'
        },
        page: {
            backgroundColor: '#f9f9f9',
            width: '100%',
            padding: theme.spacing(2)
        },
        drawer: {
            width: drawerWidth
        },
        drawerPaper: {
            width: drawerWidth
        },
        active: {
            backgroundColor: '#f4f4f4'
        },
        title: {
            padding: theme.spacing(3)
        },
        appbar: {
            width: `calc(100% - ${drawerWidth}px)`
        },
        toolbar: theme.mixins.toolbar,
        date: {
            flexGrow: 1
        },
        avatar: {
            marginLeft: theme.spacing(2)
        }
    }

})

export default function Layout({ children }) {
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()

    const menuItem = [
        {
            text: "My Notes",
            icon: <SubjectOutlined color='secondary' />,
            path: '/'
        },
        {
            text: "Create Notes",
            icon: <AddCircleOutlineRounded color='secondary' />,
            path: '/create'
        }
    ]
    return (
        <div className={classes.root}>
            {/* app bar */}
            <AppBar
                className={classes.appbar}
                elevation={0}
            >
                <Toolbar>
                    <Typography className={classes.date}>
                        {Date().toLocaleUpperCase().toString()}
                    </Typography>
                    <Typography>
                        Maxias
                    </Typography>
                    <Avatar
                        className={classes.avatar}
                        src='https://avatars.githubusercontent.com/u/44972186?v=4'
                    />
                </Toolbar>
            </AppBar>

            {/* side drawer */}
            <Drawer
                className={classes.drawer}
                variant='permanent'
                anchor='left'
                classes={{ paper: classes.drawerPaper }}
            >
                <div className={classes.title}>
                    <Typography variant='h5'>
                        Maxias Notes
                </Typography>
                </div>
                <List>
                    {menuItem.map(item => (
                        <ListItem
                            button
                            key={item.text}
                            onClick={() => history.push(item.path)}
                            className={location.pathname == item.path ? classes.active : null}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>

            </Drawer>
            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {children}
            </div>

        </div>
    )
}

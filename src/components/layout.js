import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container'
import Link from './Link'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  link: {
    padding: theme.spacing(2),
    alignSelf: 'flex-end',
  },
  toolbar: { display: 'flex', justifyContent: 'flex-end' }
}))


export default function Layout(props) {
  const { children, title } = props
  const classes = useStyles()
  return (
    <Grid container direction='column'>
      <CssBaseline/>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Link className={classes.link} href='/'>
            <Typography color="secondary" variant="h6">
              Posts
            </Typography>
          </Link>
          <Link className={classes.link} href='/new'>
            <Typography color="secondary" variant="h6">
              New Post
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="md">
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            {title || 'Title'}
          </Typography>
          {children}
        </div>
      </Container>
    </Grid>
  )
}
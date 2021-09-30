import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      display:'none',
    }
    
  },
  abRoot:{
    backgroundColor: "#35C3B3"
    
  },
  
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  txtButton:{
    padding:'6px 14px',
    fontFamily:'nunito',
    fontWeight:'500',
  },
  joinNow:{
    border: 'none',
    padding: '15px 32px',
    margin: '4px 2px',
    height: '38px',
    fontFamily:'nunito',
    
  }

}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static"  classes={{root: classes.abRoot}}>
        <div style={{justifyContent:'space-between',display:"flex",alignItems:'center'}}>
        <Toolbar >
          <Button className={classes.txtButton} color="inherit">Genius Test</Button>
          <Button className={classes.txtButton} color="inherit">Courses</Button>
          <Button className={classes.txtButton} color="inherit">Virtual Lab</Button>
          <Button className={classes.txtButton} color="inherit">Exam Cracker</Button>
          <Button className={classes.txtButton} color="inherit">Genius Coder</Button>
          <Button className={classes.txtButton} color="inherit">Genius Scholer</Button>
          
        </Toolbar>
        <Button className={classes.joinNow} variant="contained">Join Now</Button>
        </div>
      </AppBar>
    </div>
  );
}
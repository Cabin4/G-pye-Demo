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
    
  },
  abRoot:{
    backgroundColor: "#028788"
    
  },
  
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  txtButton:{
    padding:'6px 10px',
    fontFamily:'nunito',
    fontWeight:'500',
    
  }



}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static"  classes={{root: classes.abRoot}}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Button className={classes.txtButton} color="inherit">Learn</Button>
          <Button className={classes.txtButton} color="inherit">Edupye</Button>
          <Button className={classes.txtButton} color="inherit">Edushop</Button>
          <Button className={classes.txtButton} color="inherit">Eduos</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
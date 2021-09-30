import React from 'react'
import img from '../assets/mainbg.jpg'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({

    abroot:{


    },
    topLeft: {
        position: 'absolute',
        bottom: '20rem',
        margin: '0 5rem',
        fontSize: '23px',
        color:'white',
    },

    topLeft1: {
        position: 'absolute',
        bottom: '17rem',
        margin: '0 5rem',
        fontSize: '16px',
        color:'white',
    }



}));


function Coding() {

const classes = useStyles();
    return (
        <div className={classes.root}>
        <div>
            <img style={{ width: '100%',height: 'auto'}} src={img} alt="" />
            </div>
            <div className={classes.abroot}>
            <div className={classes.topLeft}>
                <h2>Coding Made Easy</h2>
                </div>
            <div className={classes.topLeft1}>
                <p style={{textAlign:'left'}}>The fun way to learn programming and develop<br/> problem-solving & critical thinking skills! Ages 5-18</p>
            </div>
                <div style={{
                        backgroundColor: '#FD8B19',
                        padding: '15px 20px',
                        borderRadius: '7px',
                        color: '#fff',
                        fontWeight: '580',
                        fontFamily: 'nunito',
                        fontSize: '14px',
                        transition: 'all 200ms ease',
                        cursor: 'pointer',
                        border:'none',
                        position: 'absolute',
                        bottom: '13rem',
                        margin: '0 5rem',
                    }}>
                    GET STARTED FOR FREE
           </div>
           </div>
        </div>
       
    )
}

export default Coding

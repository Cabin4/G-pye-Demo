import React from 'react'
import { Grid, Paper, Typography, Container, Button } from '@material-ui/core'

function Innovative() {
    return (
        <div style={{
            backgroundColor:'#F6F9FB',
            height:'320vh',
            display:'inline-block',
            margin:'-6px',
            width:'100%',
            fontFamily:'nunito',
            }}>
                 <div>
                <Typography variant="h4" 
                style={{
                    textAlign:'center',
                    paddingTop: '20px',
                    fontFamily: "nunito",
                    fontWeight:'700' 
                    }}>Get the  <span style={{color:'#5DC5BD'}}> Innovative Learning</span> Advantage</Typography>
            </div>
    <Container>
                    
                    <Grid container spacing={3} direction="row">
                                    <Grid item xs={3}>
                                    <Paper elevation={3} style={{marginTop:'40px',height:'450px'}}>
                                        <Typography>
                                                Innovation
                                        </Typography>
                                    </Paper>
                                    </Grid>
                                    <Grid item xs={3}>
                                    <Paper elevation={3} style={{marginTop:'40px',height:'450px'}}>
                                        <Typography>
                                                Innovation
                                        </Typography>
                                    </Paper>
                                    </Grid>
                                    <Grid item xs={3}>
                                    <Paper elevation={3} style={{marginTop:'40px',height:'450px'}}>
                                        <Typography>
                                                Innovation
                                        </Typography>
                                    </Paper>
                                    </Grid>
                                    <Grid item xs={3}>
                                    <Paper elevation={3} style={{marginTop:'40px',height:'450px'}}>
                                        <Typography>
                                                Innovation
                                        </Typography>
                                    </Paper>
                                    </Grid>
                    
                    </Grid>
              
                   
    </Container>

    <Container>
                    
                    <Grid container spacing={3} direction="row">
                                    <Grid item xs={4}>
                                    <Paper elevation={3} style={{marginTop:'40px',height:'450px'}}>
                                        <Typography>
                                                Innovation
                                        </Typography>
                                    </Paper>
                                    </Grid>
                                    <Grid item xs={4}>
                                    <Paper elevation={3} style={{marginTop:'40px',height:'450px'}}>
                                        <Typography>
                                                Innovation
                                        </Typography>
                                    </Paper>
                                    </Grid>
                                    <Grid item xs={4}>
                                    <Paper elevation={3} style={{marginTop:'40px',height:'450px'}}>
                                        <Typography>
                                                Innovation
                                        </Typography>
                                    </Paper>
                                    </Grid>
                                
                    
                    </Grid>
              
                   
    </Container>
    <Button variant="contained" style={{backgroundColor:'#FD8B19',color:'white',margin:'5rem',width:'200px'}}>
            EXPLORE COURSES</Button>


            <Container>
                    <Typography variant="h4" 
                    style={{
                        textAlign:'center',
                        paddingTop: '20px',
                        fontFamily: "nunito",
                        fontWeight:'700' 
                    }}>
                         <span style={{color:'#5DC5BD'}}>Geniuspye</span>  accelerates learning &<br/> delivers better results 
                    </Typography>
                    <Grid container spacing={3} direction="row">
                                    <Grid item xs={6}>
                                    <Paper elevation={3} style={{marginTop:'40px',height:'550px'}}>
                                        <Typography variant="h4" 
                                            style={{
                                                textAlign:'left',
                                                padding: '20px 30px',
                                                fontFamily: "nunito",
                                                fontWeight:'700' 
                                            }}>
                                               <span style={{color:'#5DC5BD'}}>Adaptive Learning</span> <br/>for all students
                                        </Typography>
                                    </Paper>
                                    </Grid>
                                    <Grid item xs={6}>
                                    <Paper elevation={3} style={{marginTop:'40px',height:'550px'}}>
                                    <Typography variant="h4" 
                                            style={{
                                                textAlign:'left',
                                                padding: '20px 30px',
                                                fontFamily: "nunito",
                                                fontWeight:'700' 
                                            }}>
                                               One stop solution<br/> for <span style={{color:'#5DC5BD'}}>Doubts</span>
                                        </Typography>
                                    </Paper>
                                    </Grid>
                                   
                                
                    
                    </Grid>
              
                   
    </Container>
        </div>
    )
}

export default Innovative

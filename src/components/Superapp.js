import { Grid, Paper, Typography, Container, Button } from '@material-ui/core'
import React from 'react'


function Superapp() {
    return (
        <div style={{
        backgroundColor:'#F6F9FB',
        height:'100vh',
        display:'inline-block',
        margin:'-6px',
        width:'100%',
        fontFamily:'nunito',
        }}>
            {/* <div >
                <h1 style={{
                    textAlign:'center',
                    paddingTop: '20px',
                }}>A super app with <span style={{color:'#5DC5BD'}}>360°</span> approach <br/> to complete learning</h1>
            </div> */}
            <div>
                <Typography variant="h4" 
                style={{
                    textAlign:'center',
                    paddingTop: '20px',
                    fontFamily: "nunito",
                    fontWeight:'700' 
                    }}>A super app with <span style={{color:'#5DC5BD'}}>360°</span> approach <br/> to complete learning</Typography>
            </div>
            <Container maxWidth="lg">
            
            <Paper elevation={3} style={{marginTop:'40px',height:'250px'}}>
                {/* <Grid container spacing={2}  direction="row"> */}
                    {/* <Grid item xs={12} md={6} lg={3}  >
                        <Grid item> 
                            <Typography style={{fontFamily:'nunito',fontWeight: '700'}} variant="h6">
                              Online Lessons
                            </Typography>
                            <Typography variant="subtitle1" color="initial">Lorem Ipsum Lorem Ipsum Lorem</Typography>
                        </Grid> 
                        <Grid item > 
                            <Typography style={{fontFamily:'nunito',fontWeight: '700'}} variant="h6">
                              Online Lessons
                            </Typography>
                            <Typography variant="subtitle1" color="initial">Lorem Ipsum Lorem Ipsum Lorem</Typography>
                        </Grid>  
                      

                    </Grid> */}
            <Grid item xs={12} sm container>
                <Grid item xs container direction="row" spacing={2}>
                    <Grid item xs>
                            <div style={{backgroundColor: '#C4E4FB',
                            borderRadius: '50%',
                            width: '60px',
                            height: '60px'}}>
                            
                            </div>

                            <Typography style={{fontFamily:'nunito',fontWeight: '700',color:'#71C9BE'}} variant="h6">
                              Online Lessons
                            </Typography>
                            <Typography variant="subtitle1" color="initial">
                                Lorem Ipsum Lorem Ipsum Lorem
                                <br />Lorem Ipsum Lorem Ipsum Lorem
                                <br />Lorem Ipsum Lorem Ipsum Lorem
                            </Typography>
                    </Grid>
                    <Grid item xs>
                            <div style={{backgroundColor: '#C4E4FB',
                            borderRadius: '50%',
                            width: '60px',
                            height: '60px'}}>
                            
                            </div>

                            <Typography style={{fontFamily:'nunito',fontWeight: '700',color:'#71C9BE'}} variant="h6">
                            Genius Test
                            </Typography>
                            <Typography variant="subtitle1" color="initial">
                                Lorem Ipsum Lorem Ipsum Lorem
                                <br />Lorem Ipsum Lorem Ipsum Lorem
                                <br />Lorem Ipsum Lorem Ipsum Lorem
                            </Typography>
                    </Grid>
                    <Grid item xs>
                            <div style={{backgroundColor: '#C4E4FB',
                            borderRadius: '50%',
                            width: '60px',
                            height: '60px'}}>
                            
                            </div>

                            <Typography style={{fontFamily:'nunito',fontWeight: '700',color:'#71C9BE'}} variant="h6">
                            Test & Analysis
                            </Typography>
                            <Typography variant="subtitle1" color="initial">
                                Lorem Ipsum Lorem Ipsum Lorem
                                <br />Lorem Ipsum Lorem Ipsum Lorem
                                <br />Lorem Ipsum Lorem Ipsum Lorem
                            </Typography>
                    </Grid>
                    <Grid item xs>
                            <div style={{backgroundColor: '#C4E4FB',
                            borderRadius: '50%',
                            width: '60px',
                            height: '60px'}}>
                            
                            </div>

                            <Typography style={{fontFamily:'nunito',fontWeight: '700',color:'#71C9BE'}} variant="h6">
                            Personalized Learning
                            </Typography>
                            <Typography variant="subtitle1" color="initial">
                                Lorem Ipsum Lorem Ipsum Lorem
                                <br />Lorem Ipsum Lorem Ipsum Lorem
                                <br />Lorem Ipsum Lorem Ipsum Lorem
                            </Typography>
                    </Grid>
                  
           
     
                </Grid>
                </Grid>
            </Paper>
              
        </Container>
        <Button variant="contained" style={{backgroundColor:'#51C6BE',color:'white',margin:'8rem',width:'400px'}}>
            Join Now</Button>
        </div>
    )
}

export default Superapp

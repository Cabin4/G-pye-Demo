import { Container, Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'
import Appstore from '../assets/app-store.png'
import Playstore from '../assets/play-store.png'
import Cutout from '../assets/cut-out.png'

function Classses() {
    return (
        <div style={{
            backgroundColor:'#F6F9FB',
            height:'200vh',
            display:'inline-block',
            margin:'-6px',
            width:'100%',
            fontFamily:'nunito',
            }}>
           <Container>
               <Grid>
                   <Grid item xs={12}>
                        <div style={{marginTop:'40px',height:'40px',backgroundColor:'#E2ECF3',width: '60%',}}>

                        </div>
                   </Grid>
               </Grid>
           </Container>
           <Container>
                    
                    <Grid container spacing={6} direction="row">
                                    <Grid item xs={4}>
                                    <Paper elevation={3} style={{marginTop:'40px',height:'450px',width:'350px'}}>
                                        <Typography>
                                                Innovation
                                        </Typography>
                                    </Paper>
                                    </Grid>
                                    <Grid item xs={4}>
                                    <Paper elevation={3} style={{marginTop:'40px',height:'450px',width:'350px'}}>
                                        <Typography>
                                                Innovation
                                        </Typography>
                                    </Paper>
                                    </Grid>
                                    <Grid item xs={4}>
                                    <Paper elevation={3} style={{marginTop:'40px',height:'450px',width:'350px'}}>
                                        <Typography>
                                                Innovation
                                        </Typography>
                                    </Paper>
                                    </Grid>
                                
                    
                    </Grid>
              
                   
            </Container> 
            <Container>
            <Typography variant="h4" 
                    style={{
                        textAlign:'left',
                        paddingTop: '60px',
                        fontFamily: "nunito",
                        fontWeight:'700' 
                    }}>
                        <span style={{color:'#5DC5BD'}}> Geniuspye</span>  app is available on<br/> all platforms
                    </Typography>
                 <Grid  xs={4} direction='row'  >
                     <Grid item >
                     <img  style={{ width: '200px',height: '60px'}} src={Playstore} alt="" />
                     </Grid>
                     <Grid item >
                     <img  style={{ width: '205px',height: '60px'}} src={Appstore} alt="" />
                     </Grid>
                     <Grid item >
                     <img  src={Cutout} alt="" />
                     </Grid>
                </Grid>   
            </Container>
        </div>
    )
}

export default Classses

import { Container, Grid, Typography } from '@material-ui/core'
import React from 'react'

function Footer() {
    return (
        <div style={{
    
            height:'80vh',
            display:'inline-block',
            margin:'-6px',
            width:'100%',
            fontFamily:'nunito',
            backgroundColor:'#51C6BE'
            }}>


            <Container>
                <Grid>
                    <Grid item>
                        <Typography variant='h6'>
                        QUICK LINKS
                        </Typography>
                    </Grid>
                </Grid>
            </Container>

            
        </div>
    )
}

export default Footer

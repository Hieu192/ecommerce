import React from 'react'
import {Grid, Typography,Button} from '@mui/material'

const Footer = () => {
  return (
    <div>
        <Grid container
        className='bg-black text-white text-center mt-10'
        sx={{bgcolor: "black", color:"white", py:3}}>
            <Grid item xs={12} sm={6} md={3}>
                <Typography variant="h6" className='pb-5'>Company</Typography>
                <div>
                <Button variant="h6" className='pb-5' gutterBottom>About</Button>
                </div>
                <div>
                <Button variant="h6" className='pb-5' gutterBottom>Blog</Button>

                </div>
                <div>
                <Button variant="h6" className='pb-5' gutterBottom>Jobs</Button>

                </div>
                <div>
                <Button variant="h6" className='pb-5' gutterBottom>Press</Button>

                </div>
                <div>
                <Button variant="h6" className='pb-5' gutterBottom>Partners</Button>

                </div>

            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Typography variant="h6" className='pb-5'>Solutions</Typography>
                <div>
                <Button variant="h6" className='pb-5' gutterBottom>Marketing</Button>

                </div>
                <div>
                <Button variant="h6" className='pb-5' gutterBottom>Analytics</Button>

                </div>
                <div>
                <Button variant="h6" className='pb-5' gutterBottom>Commerce</Button>

                </div>
                <div>
                <Button variant="h6" className='pb-5' gutterBottom >Insights</Button>
                    
                </div>
                <div>
                <Button variant="h6" className='pb-5' gutterBottom >Support</Button>

                </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Typography variant="h6" className='pb-5'>Documentation</Typography>
                <div>
                <Button variant="h6" className='pb-5' gutterBottom>Guides</Button>

                </div>
                <div>
                <Button variant="h6" className='pb-5' gutterBottom>API Status</Button>

                </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Typography variant="h6" className='pb-5'>Legal</Typography>
                <div>
                <Button variant="h6" className='pb-5' gutterBottom>Claim</Button>

                </div>
                <div>
                <Button variant="h6" className='pb-5' gutterBottom>Privacy</Button>

                </div>
                <div>
                <Button variant="h6" className='pb-5' gutterBottom>Terms</Button>

                </div>
            </Grid>
        </Grid>
    </div>
  )
}

export default Footer
import { Box, Grid, Hidden, Typography } from "@mui/material"
import { Images, TestimData } from "../../Data"
const Testim = () => {
    return (
        <Grid container sx={{ backgroundColor: '#F8F5F4', textAlign: 'center', pt: '4rem', width: '100%', display: 'flex', alignItems: 'center' }} xs={12} md={12} lg={12}>
            <Grid item sx={{ display: 'flex', justifyContent: 'space-around', gap: '14rem' }}>
                <Hidden lgDown>
                    <Box ><img src={Images.Colon} alt="Image" width={'50%'} /> </Box>
                </Hidden>
                <Box>
                    <Grid item sx={{ width: '100%', textAlign: 'center' }}>
                        <Typography variant="h6">{TestimData.Testim_Desctiption}</Typography>
                        <Typography sx={{ pt: '1rem' }}>{TestimData.Testim_Chip}</Typography>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Testim
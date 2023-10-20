import { Grid, Typography } from "@mui/material"

const Copyrights = () => {
    return (
        <Grid container sx={{ backgroundColor: 'skyblue', display: 'flex', justifyContent: 'space-around', color: '#fff' }}>
            <Grid item>
                <Typography variant="h6">Copyrights © 2023</Typography>
            </Grid>
            <Grid item>
                <Typography variant="h6">Haseeb Ur Rehman</Typography>
            </Grid>
        </Grid>
    )
}

export default Copyrights
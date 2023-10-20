import { Box, Button, Grid, Typography } from "@mui/material";
import { Images } from "../../Data";
import { HealthData } from "../../Data";
import { Link } from "react-router-dom";

const Health = () => {
    return (
        <Grid container xs={12} sx={{ backgroundImage: `url(${Images.health})`, backgroundSize: "cover", backgroundAttachment: "fixed", position: "relative", height: '50rem', pt: '3rem' }}>
            <Box sx={{ backgroundColor: "rgba(0, 0, 0, 0.5)", position: "absolute", top: 0, right: 0, bottom: 0, left: 0, }} ></Box>
            <Grid item sx={{ height: '95vh', width: '100%', zIndex: 10, pt: '15rem', textAlign: 'center' }}>
                <Typography variant="h4" sx={{ fontWeight: '600', color: '#fff', textAlign: 'center' }}>{HealthData.Health_Heading}</Typography>
                <Typography variant="h6" sx={{ color: '#fff', textAlign: 'center' }}>{HealthData.Health_Description}</Typography>
                <Link to='/Services'>
                    <Button size="small" variant="contained" color='success' sx={{ mt: '2rem' }} >LEARN MORE</Button>
                </Link>
            </Grid>
        </Grid>
    )
}

export default Health;

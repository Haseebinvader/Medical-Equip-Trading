import Navbar from "../../components/Navbar";
import { Box, Grid, Typography } from "@mui/material";
import { Images } from "../../Data";
const Aboutus = () => {
    return (
        <Grid container xs={12} sx={{ backgroundImage: `url(${Images.Background})`, backgroundSize: "cover", backgroundAttachment: "fixed", height: '100vh' }}>
            <Box sx={{ content: '""', background: "rgba(0, 0, 0, 0.3)", position: "absolute", top: 0, right: 0, bottom: 0, left: 0, }} ></Box>
            <Navbar />
            <Grid item sx={{
                height: '83vh', width: '100%', zIndex: 10, '@media (max-width: 600px)': { height: '68vh', pt: '6rem', },
                '@media (min-width: 601px) and (max-width: 960px)': { height: '70vh', pt: '8rem', },
                '@media (min-width: 961px)': { height: '83vh', pt: '10rem', }
            }}>
                <Typography variant="h2" sx={{ fontWeight: '600', color: '#fff', textAlign: 'center' }}>ABOUT US</Typography>
            </Grid>
        </Grid>
    )
}

export default Aboutus
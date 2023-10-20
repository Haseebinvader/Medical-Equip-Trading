import { Box, Grid, Typography } from "@mui/material"
import { Images } from "../../Data"
const Location = () => {
    return (
        <Grid container sx={{ backgroundImage: `url(${Images.About_bg})`, backgroundSize: "cover", backgroundAttachment: "fixed", height: '100vh' }}>
            <Grid item sx={{ width: '100%', textAlign: 'center' }}>
                <Typography variant="h2" sx={{ fontWeight: '600', color: '#fff' }}>OUR LOCATIONS</Typography>
                <Box sx={{ width: '8rem', height: '2.5px', backgroundColor: 'orange', margin: '8px auto' }} ></Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex', py: '2rem', gap: '20px', pl: '2rem' }}>
                <Box>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.192684043936!2d55.232273674915525!3d25.162970933087056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f134e58a88347%3A0x2b7e79120fbd1fce!2sThe%20Curve%20Building!5e0!3m2!1sen!2s!4v1697622946372!5m2!1sen!2s" width="470" height="400" style={{ border: "0" }} allowfullscreen="" loading="lazy" ></iframe>
                </Box>
                <Box>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.192684043936!2d55.232273674915525!3d25.162970933087056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f134e58a88347%3A0x2b7e79120fbd1fce!2sThe%20Curve%20Building!5e0!3m2!1sen!2s!4v1697622946372!5m2!1sen!2s" width="470" height="400" style={{ border: "0" }} allowfullscreen="" loading="lazy" ></iframe>
                </Box>
                <Box>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.192684043936!2d55.232273674915525!3d25.162970933087056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f134e58a88347%3A0x2b7e79120fbd1fce!2sThe%20Curve%20Building!5e0!3m2!1sen!2s!4v1697622946372!5m2!1sen!2s" width="470" height="400" style={{ border: "0" }} allowfullscreen="" loading="lazy" ></iframe>
                </Box>
            </Grid >
        </Grid>
    )
}

export default Location
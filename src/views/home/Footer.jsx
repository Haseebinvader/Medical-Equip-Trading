import { Box, Grid, Typography } from "@mui/material";
import { FooterData } from "../../Data";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Footer = () => {
    return (
        <Grid container sx={{ backgroundColor: '#7A7A7A', pt: '3rem', minHeight: 'auto', justifyContent: 'space-between', width: '100%', pl: '4rem' }}>
            <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex', flexDirection: 'column', py: '2rem' }}>
                <Typography variant="h5" sx={{ fontWeight: '600', color: '#fff', '&:hover': { color: 'red' } }}>{FooterData.Footer_Link1}</Typography>
                <Typography sx={{ color: '#fff', pt: '2rem' }}>{FooterData.Link1_Description}</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={2} sx={{ display: 'flex', flexDirection: 'column', py: '2rem' }}>
                <Typography variant="h5" sx={{ fontWeight: '600', color: '#fff', '&:hover': { color: 'red' } }}>{FooterData.Footer_Link2}</Typography>
                <Typography sx={{ color: '#fff', pt: '1rem', '&:hover': { color: 'red' } }}> ➔ {FooterData.Link2_Item1}</Typography>
                <Typography sx={{ color: '#fff', '&:hover': { color: 'red' } }}> ➔ {FooterData.Link2_Item2}</Typography>
                <Typography sx={{ color: '#fff', '&:hover': { color: 'red' } }}> ➔ {FooterData.Link2_Item3}</Typography>
                <Typography sx={{ color: '#fff', '&:hover': { color: 'red' } }}> ➔ {FooterData.Link2_Item4}</Typography>
                <Typography sx={{ color: '#fff', '&:hover': { color: 'red' } }}> ➔ {FooterData.Link2_Item5}</Typography>
            </Grid >
            <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex', flexDirection: 'column', py: '2rem' }}>
                <Typography variant="h5" sx={{ fontWeight: '600', color: '#fff', '&:hover': { color: 'red' } }}>{FooterData.Footer_Link3}</Typography>
                <Typography sx={{ color: '#fff', display: 'flex', alignItems: 'center', pt: '1rem', gap: '0.5rem' }}><LocalPhoneIcon /> {FooterData.Link3_Phone}</Typography>
                <Typography sx={{ color: '#fff', display: 'flex', alignItems: 'center', pt: '1rem', gap: '0.5rem' }}><EmailIcon /> {FooterData.Link3_Mail}</Typography>
                <Typography sx={{ color: '#fff', display: 'flex', alignItems: 'center', pt: '1rem', gap: '0.5rem' }}><LocationOnIcon /> {FooterData.Link3_Address1}</Typography>
                <Typography sx={{ color: '#fff', display: 'flex', alignItems: 'center', pt: '1rem', gap: '0.5rem' }}><LocationOnIcon /> {FooterData.Link3_Address2}</Typography>
                <Typography sx={{ color: '#fff', display: 'flex', alignItems: 'center', pt: '1rem', gap: '0.5rem' }}><LocationOnIcon /> {FooterData.Link3_Address3}</Typography>
            </Grid >
            <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex', flexDirection: 'column', py: '2rem' }}>
                <Typography variant="h5" sx={{ fontWeight: '600', color: '#fff', '&:hover': { color: 'red' } }}> {FooterData.Footer_Link4}</Typography>
                <Box>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.192684043936!2d55.232273674915525!3d25.162970933087056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f134e58a88347%3A0x2b7e79120fbd1fce!2sThe%20Curve%20Building!5e0!3m2!1sen!2s!4v1697622946372!5m2!1sen!2s" width="300" height="87" style={{ border: "0" }} allowfullscreen="" loading="lazy" ></iframe>
                </Box>
                <Box>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.192684043936!2d55.232273674915525!3d25.162970933087056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f134e58a88347%3A0x2b7e79120fbd1fce!2sThe%20Curve%20Building!5e0!3m2!1sen!2s!4v1697622946372!5m2!1sen!2s" width="300" height="87" style={{ border: "0" }} allowfullscreen="" loading="lazy" ></iframe>
                </Box>
                <Box>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.192684043936!2d55.232273674915525!3d25.162970933087056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f134e58a88347%3A0x2b7e79120fbd1fce!2sThe%20Curve%20Building!5e0!3m2!1sen!2s!4v1697622946372!5m2!1sen!2s" width="300" height="87" style={{ border: "0" }} allowfullscreen="" loading="lazy" ></iframe>
                </Box>
            </Grid >
        </Grid >
    )
}

export default Footer;

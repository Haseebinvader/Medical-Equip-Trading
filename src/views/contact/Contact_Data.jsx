import { Box, Grid, Typography } from "@mui/material"
import { Images, FooterData } from "../../Data"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Contact_Data = () => {
    return (
        <>
            <Grid container sx={{ backgroundImage: `url(${Images.About_bg})`, backgroundSize: "cover", backgroundAttachment: "fixed", minHeight: '100vh', color: '#fff' }}>
                <Grid item xs={12} sx={{ width: '100%', textAlign: 'center', py: { xs: '2rem', sm: '4rem' } }}>
                    <Typography sx={{ fontWeight: '600', pt: '4rem' }} variant="h3">GET IN TOUCH</Typography>
                    <Box sx={{ width: '8rem', height: '2.5px', backgroundColor: 'orange', margin: '8px auto' }} ></Box>
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', zIndex: 10, mt: '-10rem', backdropFilter: 'blur(2px)', gap: '4rem' }}>
                    <Box sx={{ py: '2rem', width: '30rem' }}>
                        <Typography sx={{ fontWeight: '600', width: '100%', '&:hover': { color: 'red' } }} variant="h5">ADDRESS</Typography>
                        <Typography sx={{ pt: '2rem', display: 'flex', alignItems: 'center' }} variant="h6"> <LocationOnIcon /> {FooterData.Link3_Address1}</Typography>
                        <Typography sx={{ pt: '2rem', display: 'flex', alignItems: 'center' }} variant="h6"><LocationOnIcon /> {FooterData.Link3_Address2}</Typography>
                        <Typography sx={{ pt: '2rem', display: 'flex', alignItems: 'center' }} variant="h6"><LocationOnIcon /> {FooterData.Link3_Address3}</Typography>
                    </Box>
                    <Box sx={{ textAlign: 'center', py: '2rem' }}>
                        <Typography sx={{ fontWeight: '600', width: '100%', '&:hover': { color: 'red' } }} variant="h5">PHONE</Typography>
                        <Typography sx={{ pt: '2rem', display: 'flex', alignItems: 'center' }} variant="h6"> <LocalPhoneIcon /> {FooterData.Link3_Phone}</Typography>
                    </Box>
                    <Box sx={{ textAlign: 'center', py: '2rem' }}>
                        <Typography sx={{ fontWeight: '600', width: '100%', '&:hover': { color: 'red' } }} variant="h5">EMAIL</Typography>
                        <Typography sx={{ pt: '2rem', display: 'flex', alignItems: 'center' }} variant="h6"> <EmailIcon />{FooterData.Link3_Mail}</Typography>
                    </Box>
                </Grid>

            </Grid>
        </>
    )
}

export default Contact_Data;

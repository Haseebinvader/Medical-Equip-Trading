import { Box, Grid, Typography } from "@mui/material"
import { AboutData, Images } from "../../Data"

const Company = () => {
    return (
        <Grid container sx={{ backgroundImage: `url(${Images.About_bg})`, backgroundSize: "cover", backgroundAttachment: "fixed", position: "relative", minHeight: '100vh' }}>
            <Box sx={{ backgroundColor: "rgba(0, 0, 0, 0.5)", position: "absolute", top: 0, right: 0, bottom: 0, left: 0, }}></Box>
            <Grid item xs={12} sx={{ color: '#fff', zIndex: 10, padding: { xs: '2rem', sm: '4rem', md: '6rem' } }}>
                <Typography variant="h4" sx={{ fontWeight: '600', pt: '4rem', textAlign: 'center' }}>ABOUT SUPER DAY MEDICAL EQUIPMENT TRADING</Typography>
                <Box sx={{ width: '8rem', height: '2.5px', backgroundColor: 'orange', margin: '8px 0', textAlign: 'center', marginLeft: '14rem', mt: '1rem' }}></Box>
                <Typography variant="h6" sx={{ fontWeight: '600', pt: '4rem' }}>Introduction</Typography>
                <Box sx={{ width: '8rem', height: '2.5px', backgroundColor: 'orange', margin: '8px 0', textAlign: 'center', mt: '1rem' }}></Box>
                <Typography>{AboutData.Company_Description}</Typography>
                <Typography variant="h6" sx={{ fontWeight: '600', pt: '4rem' }}>Our Mission</Typography>
                <Box sx={{ width: '8rem', height: '2.5px', backgroundColor: 'orange', margin: '8px 0', textAlign: 'center', mt: '1rem' }}></Box>
                <Typography>{AboutData.Our_Mission}</Typography>
                <Typography variant="h6" sx={{ fontWeight: '600', pt: '4rem' }}>Our Values</Typography>
                <Box sx={{ width: '8rem', height: '2.5px', backgroundColor: 'orange', margin: '8px 0', textAlign: 'center', mt: '1rem' }}></Box>
                <Typography variant="body1" sx={{ fontWeight: '600', pt: '2rem' }}>→ {AboutData.Value1_Heading}</Typography>
                <Typography>{AboutData.Value1_Description}</Typography>
                <Typography variant="body1" sx={{ fontWeight: '600', pt: '2rem' }}>→ {AboutData.Value2_Heading}</Typography>
                <Typography>{AboutData.Value2_Description}</Typography>
                <Typography variant="body1" sx={{ fontWeight: '600', pt: '2rem' }}>→ {AboutData.Value3_Heading}</Typography>
                <Typography>{AboutData.Value3_Description}</Typography>
                <Typography variant="body1" sx={{ fontWeight: '600', pt: '2rem' }}>→ {AboutData.Value4_Heading}</Typography>
                <Typography>{AboutData.Value4_Description}</Typography>
                <Typography variant="h6" sx={{ fontWeight: '600', pt: '4rem' }}>{AboutData.Product_Range_Heading}</Typography>
                <Box sx={{ width: '8rem', height: '2.5px', backgroundColor: 'orange', margin: '8px 0', textAlign: 'center', mt: '1rem' }}></Box>
                <Typography variant="body1" sx={{ fontWeight: '600', pt: '2rem' }}>→ {AboutData.Product_Range1}</Typography>
                <Typography variant="body1" sx={{ fontWeight: '600', pt: '2rem' }}>→ {AboutData.Product_Range2}</Typography>
                <Typography variant="body1" sx={{ fontWeight: '600', pt: '2rem' }}>→ {AboutData.Product_Range3}</Typography>
                <Typography variant="body1" sx={{ fontWeight: '600', pt: '2rem' }}>→ {AboutData.Product_Range4}</Typography>
                <Typography variant="body1" sx={{ fontWeight: '600', pt: '2rem' }}>→ {AboutData.Product_Range5}</Typography>
                <Typography variant="body1" sx={{ fontWeight: '600', pt: '2rem', mb: '2rem' }}>→ {AboutData.Product_Range6}</Typography>
            </Grid>
        </Grid>
    )
}

export default Company;

import { Box, Card, Grid, Typography } from "@mui/material"
import { EquipmData, Images } from "../../Data"


const Equip = () => {
    return (
        <Grid container sx={{ backgroundColor: '#F8F5F4', pt: '6rem' }}>
            <Grid item sx={{ width: '100%' }}>
                <Typography variant="h4" sx={{ fontWeight: '600', textAlign: 'center' }}>{EquipmData.Equip_Heading}</Typography>
            </Grid>
            <Box sx={{ width: '8rem', height: '2.5px', backgroundColor: 'orange', margin: '8px 0', textAlign: 'center', marginLeft: '43rem', mt: '1rem' }} ></Box>
            <Grid container sx={{ display: 'flex', justifyContent: 'space-around', pt: '4rem' }}>
                <Grid item>
                    <Card sx={{ maxWidth: 380, height: '30rem', textAlign: 'center', mb: '2rem', mt: '2rem', boxShadow: '4px 2px 0.2px lightgrey', borderRadius: '20px' }}>
                        <img src={Images.service1} style={{ width: '60%', paddingTop: '2rem' }} />
                        <Typography variant="h6" sx={{ fontWeight: '600' }}>{EquipmData.Card1_Heading}</Typography>
                        <Typography sx={{ pt: '2rem' }}>{EquipmData.Card1_Description}</Typography>
                    </Card>
                </Grid>
                <Grid item >
                    <Card sx={{ maxWidth: 380, height: '30rem', textAlign: 'center', mb: '2rem', mt: '2rem', boxShadow: '4px 2px 0.2px lightgrey', borderRadius: '20px' }}>
                        <img src={Images.service2} style={{ width: '60%', paddingTop: '2rem' }} />
                        <Typography variant="h6" sx={{ fontWeight: '600' }}>{EquipmData.Card2_Heading}</Typography>
                        <Typography >{EquipmData.Card2_Description}</Typography>
                    </Card>
                </Grid>
                <Grid item >
                    <Card sx={{ maxWidth: 380, height: '30rem', textAlign: 'center', mb: '2rem', mt: '2rem', boxShadow: '4px 2px 0.2px lightgrey', borderRadius: '20px' }}>
                        <img src={Images.service3} style={{ width: '60%', paddingTop: '2rem' }} />
                        <Typography variant="h6" sx={{ fontWeight: '600' }}>{EquipmData.Card3_Heading}</Typography>
                        <Typography sx={{ pt: '2rem' }}>{EquipmData.Card3_Description}</Typography>
                    </Card>
                </Grid>
                <Grid item>
                    <Card sx={{ maxWidth: 380, height: '30rem', textAlign: 'center', mb: '2rem', mt: '2rem', boxShadow: '4px 2px 0.2px lightgrey', borderRadius: '20px' }}>
                        <img src={Images.service4} style={{ width: '60%', paddingTop: '2rem' }} />
                        <Typography variant="h6" sx={{ fontWeight: '600' }}>{EquipmData.Card1_Heading}</Typography>
                        <Typography sx={{ pt: '2rem' }}>{EquipmData.Card1_Description}</Typography>
                    </Card>
                </Grid>
                <Grid item >
                    <Card sx={{ maxWidth: 380, height: '30rem', textAlign: 'center', mb: '2rem', mt: '2rem', boxShadow: '4px 2px 0.2px lightgrey', borderRadius: '20px' }}>
                        <img src={Images.service5} style={{ width: '60%', paddingTop: '2rem' }} />
                        <Typography variant="h6" sx={{ fontWeight: '600' }}>{EquipmData.Card2_Heading}</Typography>
                        <Typography >{EquipmData.Card2_Description}</Typography>
                    </Card>
                </Grid>
                <Grid item >
                    <Card sx={{ maxWidth: 380, height: '30rem', textAlign: 'center', mb: '2rem', mt: '2rem', boxShadow: '4px 2px 0.2px lightgrey', borderRadius: '20px' }}>
                        <img src={Images.service6} style={{ width: '60%', paddingTop: '2rem' }} />
                        <Typography variant="h6" sx={{ fontWeight: '600' }}>{EquipmData.Card3_Heading}</Typography>
                        <Typography sx={{ pt: '2rem' }}>{EquipmData.Card3_Description}</Typography>
                    </Card>
                </Grid>
                <Grid item >
                    <Card sx={{ maxWidth: 380, height: '30rem', textAlign: 'center', mb: '2rem', mt: '2rem', boxShadow: '4px 2px 0.2px lightgrey', borderRadius: '20px' }}>
                        <img src={Images.service7} style={{ width: '60%', paddingTop: '2rem' }} />
                        <Typography variant="h6" sx={{ fontWeight: '600' }}>{EquipmData.Card2_Heading}</Typography>
                        <Typography >{EquipmData.Card2_Description}</Typography>
                    </Card>
                </Grid>
                <Grid item >
                    <Card sx={{ maxWidth: 380, height: '30rem', textAlign: 'center', mb: '2rem', mt: '2rem', boxShadow: '4px 2px 0.2px lightgrey', borderRadius: '20px' }}>
                        <img src={Images.service8} style={{ width: '60%', paddingTop: '2rem' }} />
                        <Typography variant="h6" sx={{ fontWeight: '600' }}>{EquipmData.Card3_Heading}</Typography>
                        <Typography sx={{ pt: '2rem' }}>{EquipmData.Card3_Description}</Typography>
                    </Card>
                </Grid>
                <Grid item >
                    <Card sx={{ maxWidth: 380, height: '30rem', textAlign: 'center', mb: '2rem', mt: '2rem', boxShadow: '4px 2px 0.2px lightgrey', borderRadius: '20px' }}>
                        <img src={Images.service5} style={{ width: '60%', paddingTop: '2rem' }} />
                        <Typography variant="h6" sx={{ fontWeight: '600' }}>{EquipmData.Card2_Heading}</Typography>
                        <Typography >{EquipmData.Card2_Description}</Typography>
                    </Card>
                </Grid>
            </Grid>
        </Grid>)
}

export default Equip